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

const sitemap = readFileSync(new URL("../nextjs/out/sitemap.xml", import.meta.url), "utf8");
const urls = [...sitemap.matchAll(/<loc>(https:\/\/www\.hmz\.technology[^<]*)<\/loc>/g)].map((m) => m[1]);

if (!urls.length) {
  console.error("No URLs found in nextjs/out/sitemap.xml — run `npm run build` in nextjs/ first.");
  process.exit(1);
}

console.log(`Submitting ${urls.length} URLs to IndexNow in batches of 100...`);

// Batch in chunks of 100 — large single batches can be rejected (403)
let ok = 0, fail = 0;
for (let i = 0; i < urls.length; i += 100) {
  const batch = urls.slice(i, i + 100);
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList: batch,
    }),
  });
  const tag = `[${i + 1}-${i + batch.length}]`;
  if ([200, 202].includes(res.status)) {
    ok += batch.length;
    console.log(`${tag} ✅ ${res.status}`);
  } else {
    fail += batch.length;
    console.log(`${tag} ❌ ${res.status}`);
  }
  await new Promise((r) => setTimeout(r, 500));
}

console.log(`Done: ${ok} submitted, ${fail} failed.`);
if (fail > 0 && ok === 0) process.exit(1);
console.log("✅ Bing/ChatGPT/Copilot will recrawl shortly.");
