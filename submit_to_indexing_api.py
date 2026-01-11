#!/usr/bin/env python3
"""
Google Indexing API - Bulk URL Submission
Submits all URLs from sitemap to Google for rapid indexing
Uses multiple service accounts to maximize daily quota (200/account)
"""

import json
import os
import time
import xml.etree.ElementTree as ET
from pathlib import Path
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import requests

# Configuration
SITE_URL = "https://hmz.technology"
SITEMAP_URL = f"{SITE_URL}/sitemap-0.xml"
KEY_DIRECTORY = "key"
SCOPES = ["https://www.googleapis.com/auth/indexing"]

def get_service_accounts():
    """Load all service account credentials"""
    key_dir = Path(KEY_DIRECTORY)
    accounts = []
    
    for json_file in sorted(key_dir.glob("*.json")):
        try:
            credentials = service_account.Credentials.from_service_account_file(
                str(json_file), scopes=SCOPES
            )
            accounts.append({
                'name': json_file.stem,
                'credentials': credentials,
                'email': json.load(open(json_file))['client_email']
            })
            print(f"✅ Loaded: {json_file.name}")
        except Exception as e:
            print(f"❌ Failed to load {json_file.name}: {e}")
    
    return accounts

def fetch_urls_from_sitemap(sitemap_url):
    """Fetch all URLs from sitemap XML"""
    print(f"\n📥 Fetching URLs from: {sitemap_url}")
    
    try:
        response = requests.get(sitemap_url, timeout=30)
        response.raise_for_status()
        
        # Parse XML
        root = ET.fromstring(response.content)
        
        # Handle namespace
        namespace = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
        urls = [loc.text for loc in root.findall('.//ns:loc', namespace)]
        
        print(f"✅ Found {len(urls)} URLs in sitemap")
        return urls
    
    except Exception as e:
        print(f"❌ Error fetching sitemap: {e}")
        return []

def submit_url_batch(service, urls, account_name):
    """Submit a batch of URLs using one service account"""
    results = {'success': 0, 'failed': 0, 'errors': []}
    
    for i, url in enumerate(urls, 1):
        try:
            body = {
                "url": url,
                "type": "URL_UPDATED"
            }
            
            response = service.urlNotifications().publish(body=body).execute()
            results['success'] += 1
            
            if i % 10 == 0:
                print(f"  [{account_name}] Progress: {i}/{len(urls)} ({results['success']} successful)")
            
            # Rate limiting: 1 request per second
            time.sleep(1)
            
        except HttpError as e:
            results['failed'] += 1
            error_msg = f"URL: {url}, Error: {e.resp.status} - {e.content.decode()}"
            results['errors'].append(error_msg)
            
            if e.resp.status == 429:  # Quota exceeded
                print(f"  ⚠️  Quota exceeded for {account_name}")
                break
            elif e.resp.status == 403:
                print(f"  ⚠️  Permission denied - check if {account_name} is added as owner")
                break
        
        except Exception as e:
            results['failed'] += 1
            results['errors'].append(f"URL: {url}, Error: {str(e)}")
    
    return results

def main():
    print("=" * 60)
    print("🚀 Google Indexing API - Bulk Submission Tool")
    print("=" * 60)
    
    # Step 1: Load service accounts
    print("\n📂 Loading service accounts...")
    accounts = get_service_accounts()
    
    if not accounts:
        print("❌ No service accounts found in 'key/' directory!")
        return
    
    print(f"\n✅ Loaded {len(accounts)} service accounts")
    print("   Daily quota: 200 URLs per account")
    print(f"   Total capacity: {len(accounts) * 200} URLs/day\n")
    
    # Step 2: Fetch URLs from sitemap
    urls = fetch_urls_from_sitemap(SITEMAP_URL)
    
    if not urls:
        print("❌ No URLs found in sitemap!")
        return
    
    # Step 3: Distribute URLs across accounts
    urls_per_account = 200  # Max quota per account
    total_results = {'success': 0, 'failed': 0, 'errors': []}
    
    print(f"\n🔄 Starting submission of {len(urls)} URLs...\n")
    
    for idx, account in enumerate(accounts):
        # Calculate URL range for this account
        start = idx * urls_per_account
        end = start + urls_per_account
        batch_urls = urls[start:end]
        
        if not batch_urls:
            break  # No more URLs to process
        
        print(f"\n📤 Account {idx + 1}/{len(accounts)}: {account['email']}")
        print(f"   Processing URLs {start + 1} to {min(end, len(urls))} ({len(batch_urls)} URLs)")
        
        # Create API service
        try:
            service = build('indexing', 'v3', credentials=account['credentials'])
            
            # Submit batch
            results = submit_url_batch(service, batch_urls, account['name'])
            
            # Aggregate results
            total_results['success'] += results['success']
            total_results['failed'] += results['failed']
            total_results['errors'].extend(results['errors'])
            
            print(f"   ✅ Success: {results['success']}")
            print(f"   ❌ Failed: {results['failed']}")
            
        except Exception as e:
            print(f"   ❌ Error with account {account['name']}: {e}")
    
    # Step 4: Summary
    print("\n" + "=" * 60)
    print("📊 SUBMISSION SUMMARY")
    print("=" * 60)
    print(f"Total URLs processed: {total_results['success'] + total_results['failed']}")
    print(f"✅ Successfully submitted: {total_results['success']}")
    print(f"❌ Failed: {total_results['failed']}")
    
    if total_results['errors']:
        print(f"\n⚠️  Errors encountered: {len(total_results['errors'])}")
        print("\nFirst 5 errors:")
        for error in total_results['errors'][:5]:
            print(f"  - {error}")
    
    # Remaining URLs
    remaining = len(urls) - (total_results['success'] + total_results['failed'])
    if remaining > 0:
        print(f"\n⏳ Remaining URLs: {remaining}")
        print("   Run the script again tomorrow to continue!")
    
    print("\n✅ Done! Check Google Search Console in 24-48 hours for indexing status.")
    print("=" * 60)

if __name__ == "__main__":
    main()
