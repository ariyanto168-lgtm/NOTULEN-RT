const CACHE_NAME = 'rt-cache-v3.0.0';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json?v=3.0.0',
  './notulen.jpg'
];

// Memaksa instalasi SW baru tanpa menunggu
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Menghapus cache versi lama secara brutal
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    }).then(() => self.clients.claim())
  );
});

// Mode Network-First (Ambil dari internet dulu, kalau gagal baru dari cache)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
