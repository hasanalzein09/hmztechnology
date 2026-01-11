#!/bin/bash

# HMZ Technology - Deployment Script for Contact Form Fix
# This script uploads the fixed files to the production server

set -e  # Exit on error

echo "🚀 Starting deployment to hmz.technology..."

# Configuration
INSTANCE_NAME="hmztechnology2"
ZONE="europe-west9-b"
PROJECT="hasan-ai-zein"
SERVER_PATH="/home/hasanelzein/hmz-astro-deploy"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📦 Creating deployment package...${NC}"

# Create temporary deployment folder
DEPLOY_DIR="deploy_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$DEPLOY_DIR"

# Copy necessary files
echo "  ✓ Copying dist/ folder..."
cp -r dist "$DEPLOY_DIR/"

echo "  ✓ Copying contact-api.js..."
cp contact-api.js "$DEPLOY_DIR/"

echo "  ✓ Copying package files..."
cp package.json package-lock.json "$DEPLOY_DIR/"

# Create a tarball for faster upload
echo -e "${BLUE}📦 Compressing files...${NC}"
tar -czf "${DEPLOY_DIR}.tar.gz" "$DEPLOY_DIR"

echo -e "${BLUE}📤 Uploading to server...${NC}"
gcloud compute scp "${DEPLOY_DIR}.tar.gz" "${INSTANCE_NAME}:~/" --zone="${ZONE}" --project="${PROJECT}"

echo -e "${BLUE}🔧 Applying changes on server...${NC}"
gcloud compute ssh "${INSTANCE_NAME}" --zone="${ZONE}" --project="${PROJECT}" --command="
    set -e
    
    echo '  ✓ Extracting files...'
    cd ~
    DEPLOY_FILE=\$(ls deploy_*.tar.gz | head -1)
    tar -xzf \"\$DEPLOY_FILE\"
    DEPLOY_DIR=\$(ls -d deploy_*/ | head -1 | sed 's|/||')
    cd \"\$DEPLOY_DIR\"
    
    echo '  ✓ Backing up current version...'
    cd ~/hmz-astro-deploy
    if [ -d 'dist.backup' ]; then
        rm -rf dist.backup.old
        mv dist.backup dist.backup.old
    fi
    cp -r dist dist.backup 2>/dev/null || echo '    (no previous dist to backup)'
    
    echo '  ✓ Copying new files...'
    cd ~
    cp -r \"\$DEPLOY_DIR\"/dist/* ~/hmz-astro-deploy/dist/
    cp \"\$DEPLOY_DIR\"/contact-api.js ~/hmz-astro-deploy/
    
    echo '  ✓ Restarting PM2 processes...'
    cd ~/hmz-astro-deploy
    pm2 restart contact-api 2>/dev/null || pm2 start contact-api.js --name contact-api
    pm2 restart hmz-astro 2>/dev/null || echo '    (hmz-astro not managed by PM2)'
    
    echo '  ✓ Cleaning up...'
    cd ~
    rm -rf \"\$DEPLOY_DIR\" deploy_*.tar.gz
    
    echo '✅ Deployment complete on server!'
"

echo -e "${GREEN}✅ Deployment successful!${NC}"
echo ""
echo "🔍 Verifying deployment..."
echo "  API Health: https://www.hmz.technology/api/health"
echo "  Test Form: https://www.hmz.technology/services/whatsapp-ai-chatbot"
echo ""
echo "📊 Check PM2 status with:"
echo "  gcloud compute ssh ${INSTANCE_NAME} --zone=${ZONE} --project=${PROJECT} --command='pm2 status'"

# Cleanup local deployment files
rm -rf "$DEPLOY_DIR"
rm "${DEPLOY_DIR}.tar.gz"

echo -e "${GREEN}🎉 All done!${NC}"
