const CACHE_NAME = "BudgetTracker-v1";
const FILES_TO_CACHE = [
  "./index.html",
  "./manifest.json",
  "./js/idb.js",
  "./js/index.js",
  "./css/styles.css",
  "./icons/icon-192x192.png",
  "./icons/icon-512x512.png",
];

// Cache resources, install service worker
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("installing cache : " + CACHE_NAME);
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});
