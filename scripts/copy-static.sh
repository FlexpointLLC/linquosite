#!/bin/bash
# Copy static HTML files and assets to dist after build
# Exclude index.html as it's the React app entry point
mkdir -p dist
for file in *.html; do
  if [ "$file" != "index.html" ]; then
    cp "$file" dist/ 2>/dev/null || true
  fi
done
cp robots.txt dist/ 2>/dev/null || true
cp sitemap.xml dist/ 2>/dev/null || true
cp -r css dist/ 2>/dev/null || true
cp -r js dist/ 2>/dev/null || true
cp -r images dist/ 2>/dev/null || true
cp -r templates dist/ 2>/dev/null || true
cp -r videos dist/ 2>/dev/null || true
# Note: public folder is already copied by Vite

