/**
 * Inlines the local Parcel CSS + JS from dist/index.html into a single
 * bundle.html at the project root. External <link> tags (fonts, canonical)
 * are preserved.
 *
 * Why this exists instead of `html-inline`:
 *  - html-inline naively treats every <link href> (including the remote Google
 *    Fonts stylesheet and the canonical URL) as a local file and crashes.
 *  - String-based replacement corrupts minified JS that contains `$` sequences
 *    (e.g. `$'`, `` $` ``), so we use a *function* replacement instead.
 */
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

const html0 = fs.readFileSync(path.join(distDir, "index.html"), "utf8");
const files = fs.readdirSync(distDir);
const cssFile = files.find((f) => f.endsWith(".css"));
const jsFile = files.find((f) => f.endsWith(".js"));

if (!cssFile || !jsFile) {
  console.error("❌ Could not find built CSS/JS in dist/. Run the Parcel build first.");
  process.exit(1);
}

let css = fs.readFileSync(path.join(distDir, cssFile), "utf8");
let js = fs.readFileSync(path.join(distDir, jsFile), "utf8");

// Neutralize any token that could prematurely close the inline tag.
js = js.replace(/<\/script/gi, "<\\/script");
css = css.replace(/<\/style/gi, "<\\/style");

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const cssLinkRe = new RegExp("<link[^>]*href=/?" + esc(cssFile) + "[^>]*>", "i");
const jsScriptRe = new RegExp("<script[^>]*src=/?" + esc(jsFile) + "[^>]*></script>", "i");

let html = html0
  .replace(cssLinkRe, () => "<style>" + css + "</style>")
  .replace(jsScriptRe, () => '<script type="module">' + js + "</script>");

fs.writeFileSync(path.join(root, "bundle.html"), html);

const scriptCloses = (html.match(/<\/script/gi) || []).length;
const styleCloses = (html.match(/<\/style/gi) || []).length;
console.log(`   inlined ${cssFile} + ${jsFile}`);
console.log(`   sanity: </script>=${scriptCloses} (expect 1), </style>=${styleCloses} (expect 1)`);
if (scriptCloses !== 1 || styleCloses !== 1) {
  console.error("❌ Unexpected number of closing tags — bundle may be malformed.");
  process.exit(1);
}
