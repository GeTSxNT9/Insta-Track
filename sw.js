const CACHE_NAME = 'instatrack-cache-v1';
const urlsToCache = [
  '/Insta-Track/',
  '/Insta-Track/index.html',
  '/Insta-Track/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
