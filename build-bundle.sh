#!/bin/bash
# Production build → single self-contained bundle.html
#
# Runs Parcel directly via node (no pnpm wrapper needed) then inlines the local
# CSS/JS. External links (Google Fonts, canonical URL) are intentionally left
# in place. See README "Build notes" for the why.
set -e
cd "$(dirname "$0")"

echo "🧹 Cleaning previous build…"
rm -rf dist bundle.html .parcel-cache

echo "🔨 Building with Parcel…"
node ./node_modules/parcel/lib/cli.js build index.html \
  --dist-dir dist --no-source-maps --no-autoinstall

echo "🎯 Inlining CSS + JS into bundle.html…"
node ./scripts/inline.cjs

echo ""
echo "✅ Done → bundle.html ($(du -h bundle.html | cut -f1))"
echo "   Open it directly in a browser, or host the single file anywhere."
