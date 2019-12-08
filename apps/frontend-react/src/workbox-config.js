module.exports = {
  "globDirectory": "dist/apps/frontend-react",
  "globPatterns": [
    "index.html",
    "favicon.ico",
    "*.js",
    "*.css",
    "assets/**/*.png",
    "manifest.json"
  ],
  "dontCacheBustURLsMatching": new RegExp('.+\.[a-f0-9]{20}\..+'),
  "maximumFileSizeToCacheInBytes": 5000000,
  "swSrc": "apps/frontend-react/src/service-worker.js",
  "swDest": "dist/apps/frontend-react/service-worker.js"
};
