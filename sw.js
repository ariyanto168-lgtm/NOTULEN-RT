const CACHE_NAME = "notulen-rt-v3.9.9";

// Daftar aset utama yang langsung disimpan saat aplikasi pertama kali diakses
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  // Cache library pihak ketiga agar fitur tetap jalan saat offline penuh
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
  "https://cdn.jsdelivr.net/npm/sweetalert2@11",
  "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js",
  "https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js"
];

// 1. INSTALL EVENT: Menyimpan aset awal ke dalam cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Caching App Shell...");
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => {
      return self.skipWaiting(); // Memaksa service worker baru untuk langsung aktif
    })
  );
});

// 2. ACTIVATE EVENT: Menghapus cache versi lama ketika ada versi baru
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("[Service Worker] Menghapus Cache Lama:", cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. FETCH EVENT: Strategi Network-First untuk HTML/Aset
self.addEventListener("fetch", (event) => {
  // Abaikan request ke database Google Apps Script dan request selain GET (seperti POST save data)
  if (event.request.url.includes("script.google.com") || event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Jika jaringan terhubung, kembalikan respons dan perbarui cache secara dinamis
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Jika gagal (Offline / Tidak ada sinyal), ambil dari cache yang tersimpan
        return caches.match(event.request);
      })
  );
});
