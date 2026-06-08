#!/bin/bash
# Rebuild the site and publish it live to GitHub Pages (the gh-pages branch).
# Usage:  bash deploy.sh
set -e
cd "$(dirname "$0")"

# Identity for the deploy commit (read from this repo's git config)
NAME=$(git config user.name 2>/dev/null || echo "DaFadeKing")
EMAIL=$(git config user.email 2>/dev/null || echo "248960406+DaFadeKing@users.noreply.github.com")
ORIGIN=$(git remote get-url origin)

echo "🔨 Building site…"
bash build-bundle.sh

echo "🚀 Publishing to GitHub Pages…"
TMP="$(mktemp -d)"
git clone -q --branch gh-pages --single-branch "$ORIGIN" "$TMP"
cp bundle.html "$TMP/index.html"
cd "$TMP"
if git diff --quiet; then
  echo "ℹ️  No changes to publish — live site is already up to date."
else
  git add index.html
  git -c user.name="$NAME" -c user.email="$EMAIL" \
    commit -q -m "Update live site — $(date '+%Y-%m-%d %H:%M')"
  git push -q origin gh-pages
  echo "✅ Published! Live in ~1 minute at:"
  echo "   https://dafadeking.github.io/silver-strike-marine/"
fi
cd - >/dev/null
rm -rf "$TMP"
