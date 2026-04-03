const CACHE_NAME = 'pokemon-pwa-v16';
const SPRITE_CACHE = 'sprites-v1';
const FONT_CACHE = 'fonts-v1';

const APP_SHELL = [
  './index.html',
  './style.css',
  './app.js',
  './manifest.json'
];

// Install: pre-cache app shell
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME && k !== SPRITE_CACHE && k !== FONT_CACHE)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch: cache-first strategy
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Sprite requests
  if (url.hostname === 'raw.githubusercontent.com') {
    e.respondWith(cacheFirst(e.request, SPRITE_CACHE));
    return;
  }

  // Google Fonts
  if (url.hostname.includes('googleapis') || url.hostname.includes('gstatic')) {
    e.respondWith(cacheFirst(e.request, FONT_CACHE));
    return;
  }

  // App shell and everything else
  e.respondWith(cacheFirst(e.request, CACHE_NAME));
});

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    // If offline and not cached, return a basic fallback for navigation
    if (request.mode === 'navigate') {
      return caches.match('./index.html');
    }
    throw err;
  }
}
