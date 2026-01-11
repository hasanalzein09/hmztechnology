import requests
import xml.etree.ElementTree as ET
import concurrent.futures
from bs4 import BeautifulSoup
import time
import json

# Configuration
BASE_URL = "https://hmz.technology"
SITEMAP_INDEX = f"{BASE_URL}/sitemap-index.xml"
USER_AGENT = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
MAX_WORKERS = 15  # Balanced for speed vs server load

def get_urls_from_sitemap(sitemap_url):
    try:
        r = requests.get(sitemap_url, headers={"User-Agent": USER_AGENT})
        r.raise_for_status()
        tree = ET.fromstring(r.content)
        # Handle namespaces
        ns = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
        
        # If it's a sitemap index
        sitemaps = tree.findall('ns:sitemap', ns)
        if sitemaps:
            all_urls = []
            for sm in sitemaps:
                loc = sm.find('ns:loc', ns).text
                all_urls.extend(get_urls_from_sitemap(loc))
            return all_urls
        
        # If it's a regular sitemap
        urls = tree.findall('ns:url', ns)
        return [u.find('ns:loc', ns).text for u in urls]
    except Exception as e:
        print(f"Error reading sitemap {sitemap_url}: {e}")
        return []

def audit_page(url):
    report = {
        "url": url,
        "status": 0,
        "canonical_ok": False,
        "hreflang_ok": False,
        "json_ld_ok": False,
        "title_ok": False,
        "errors": []
    }
    
    try:
        r = requests.get(url, headers={"User-Agent": USER_AGENT}, timeout=15)
        report["status"] = r.status_code
        
        if r.status_code == 200:
            soup = BeautifulSoup(r.content, 'html.parser')
            
            # Title
            title = soup.find('title')
            report["title_ok"] = bool(title and title.text.strip())
            
            # Canonical
            canonical = soup.find('link', rel='canonical')
            if canonical and canonical.get('href'):
                report["canonical_ok"] = canonical.get('href').startswith(BASE_URL)
            
            # Hreflang (check for multiple languages)
            hreflangs = soup.find_all('link', rel='alternate', hreflang=True)
            report["hreflang_ok"] = len(hreflangs) >= 7  # Expect en, ar, de, fr, it, hi, ms
            
            # JSON-LD
            json_lds = soup.find_all('script', type='application/ld+json')
            report["json_ld_ok"] = len(json_lds) > 0
            
    except Exception as e:
        report["errors"].append(str(e))
        
    return report

def main():
    print(f"🚀 Starting Full Site Audit for {BASE_URL}")
    print(f"📡 Discovering URLs from sitemap...")
    urls = get_urls_from_sitemap(SITEMAP_INDEX)
    print(f"✅ Found {len(urls)} URLs.")
    
    if not urls:
        print("❌ No URLs found. Exiting.")
        return

    results = []
    print(f"🕵️ Crawling as Googlebot ({MAX_WORKERS} workers)...")
    
    start_time = time.time()
    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        future_to_url = {executor.submit(audit_page, url): url for url in urls}
        
        count = 0
        for future in concurrent.futures.as_completed(future_to_url):
            results.append(future.result())
            count += 1
            if count % 50 == 0:
                print(f"Progress: {count}/{len(urls)}")

    end_time = time.time()
    
    # Summary
    ok_count = sum(1 for r in results if r["status"] == 200)
    canonical_fail = sum(1 for r in results if r["status"] == 200 and not r["canonical_ok"])
    hreflang_fail = sum(1 for r in results if r["status"] == 200 and not r["hreflang_ok"])
    json_ld_fail = sum(1 for r in results if r["status"] == 200 and not r["json_ld_ok"])
    
    print("\n" + "="*50)
    print("📊 GOOGLEBOT AUDIT SUMMARY")
    print("="*50)
    print(f"Total Pages:    {len(results)}")
    print(f"✅ 200 OK:      {ok_count}")
    print(f"⚠️ Canonical Fail: {canonical_fail}")
    print(f"🌐 Hreflang Fail:  {hreflang_fail}")
    print(f"🤖 JSON-LD Fail:   {json_ld_fail}")
    print(f"⏱️ Total Time:    {int(end_time - start_time)}s")
    print("="*50)

    # Save detailed report
    with open('audit_report.json', 'w') as f:
        json.dump(results, f, indent=2)
    print(f"📄 Detailed report saved to audit_report.json")

if __name__ == "__main__":
    main()
