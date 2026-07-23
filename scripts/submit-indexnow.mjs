#!/usr/bin/env node
/**
 * IndexNow submission — instant indexing ping to Bing (which powers
 * ChatGPT Search & Copilot retrieval), Yandex, Naver, Seznam, Yep.
 *
 * Usage after deploy:  node scripts/submit-indexnow.mjs
 * Reads all URLs from dist/sitemap-0.xml and posts them in batches.
 */
import { readFileSync } from "node:fs";

const HOST = "www.hmz.technology";
const KEY = readFileSync(new URL("../.indexnow-key", import.meta.url), "utf8").trim();

const sitemap = readFileSync(new URL("../dist/sitemap-0.xml", import.meta.url), "utf8");
const urls = [...sitemap.matchAll(/<loc>(https:\/\/hmz\.technology[^<]*)<\/loc>/g)].map((m) => m[1]);

if (!urls.length) {
  console.error("No URLs found in dist/sitemap-0.xml — run `npm run build` first.");
  process.exit(1);
}

console.log(`Submitting ${urls.length} URLs to IndexNow...`);

// IndexNow accepts up to 10,000 URLs per request
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});

console.log(`IndexNow response: ${res.status} ${res.statusText}`);
// 200 = OK, 202 = accepted for processing
if (![200, 202].includes(res.status)) process.exit(1);
console.log("✅ Done — Bing/ChatGPT/Copilot will recrawl shortly.");
