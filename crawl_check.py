#!/usr/bin/env python3
"""Fast URL crawler to verify all sitemap URLs"""
import subprocess
import concurrent.futures
import sys

def check_url(url):
    try:
        result = subprocess.run(
            ['curl', '-s', '-o', '/dev/null', '-w', '%{http_code}', '--max-time', '10', url],
            capture_output=True, text=True, timeout=15
        )
        return (url, result.stdout.strip())
    except:
        return (url, 'TIMEOUT')

def main():
    # Read URLs
    with open('sitemap_urls.txt', 'r') as f:
        urls = [line.strip() for line in f if line.strip()]
    
    print(f"🔍 Checking {len(urls)} URLs...")
    print("")
    
    results = {'200': 0, '301': 0, '302': 0, '404': 0, '500': 0, 'other': 0}
    failed_urls = []
    
    # Check URLs in parallel
    with concurrent.futures.ThreadPoolExecutor(max_workers=20) as executor:
        future_to_url = {executor.submit(check_url, url): url for url in urls}
        
        done = 0
        for future in concurrent.futures.as_completed(future_to_url):
            url, status = future.result()
            done += 1
            
            if status == '200':
                results['200'] += 1
            elif status in ('301', '302'):
                results[status] = results.get(status, 0) + 1
            elif status == '404':
                results['404'] += 1
                failed_urls.append(f"404 - {url}")
            elif status.startswith('5'):
                results['500'] += 1
                failed_urls.append(f"{status} - {url}")
            else:
                results['other'] += 1
                failed_urls.append(f"{status} - {url}")
            
            # Progress
            if done % 100 == 0:
                print(f"Progress: {done}/{len(urls)} ({results['200']} OK)")
    
    print("")
    print("=" * 50)
    print("📊 CRAWL RESULTS")
    print("=" * 50)
    print(f"✅ Success (200): {results['200']}")
    print(f"🔀 Redirects: {results.get('301', 0) + results.get('302', 0)}")
    print(f"❌ Not Found (404): {results['404']}")
    print(f"🔥 Server Error (5xx): {results['500']}")
    print(f"⚠️  Other: {results['other']}")
    print("")
    
    if failed_urls:
        print("Failed URLs (first 20):")
        for url in failed_urls[:20]:
            print(f"  {url}")
    else:
        print("🎉 ALL URLS RETURNED 200!")
    
    return 0 if not failed_urls else 1

if __name__ == "__main__":
    sys.exit(main())
