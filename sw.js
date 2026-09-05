const CACHE = 'italy-2026-github-v10-12-0-full-release-1';
const APP_SHELL = [
  './',
  './index.html',
  './data.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './assets/comfort/rome-restrooms.jpg',
  './assets/comfort/florence-restrooms.jpg',
  './assets/comfort/venice-restrooms.jpg',
  './assets/tides/san-marco.png',
  './assets/tides/rialto.png',
  './assets/tides/santa-lucia.png'
  ,'./assets/guides/fco-arrival-to-train-1.png'
  ,'./assets/guides/fco-arrival-to-train-2.png'
  ,'./assets/guides/venice-station-to-jw-marriott.png'
  ,'./assets/guides/venice-departure-day.png'
  ,'./assets/guides/italy-bathroom-survival.jpg'
  ,'./assets/guides/luggage-lock-instructions.jpg'
  ,'./assets/guides/venice-october-2026-tide-chart.png'
  ,'./assets/guides/cph-connection-guide-outbound.pdf'
  ,'./assets/guides/venice-vaporetto-map-2026.pdf'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

function cacheNetworkResponse(request, response) {
  if (response && response.status === 200 && response.type !== 'opaque') {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(request, copy));
  }
  return response;
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Weather must always try the network; the app maintains its own last-known offline cache.
  if (url.hostname === 'api.open-meteo.com') {
    event.respondWith(fetch(event.request));
    return;
  }

  const isSameOrigin = url.origin === self.location.origin;
  const isMutableAppFile = isSameOrigin && /\/(?:index\.html|data\.js|manifest\.json)$/.test(url.pathname);

  // Navigations and mutable app data/code are network-first so a GitHub Pages
  // deployment reaches installed PWAs without requiring a cache-name bump for
  // every index/data edit. Cached copies remain the offline fallback.
  if (event.request.mode === 'navigate' || isMutableAppFile) {
    event.respondWith(
      fetch(event.request)
        .then(response => cacheNetworkResponse(event.request, response))
        .catch(() =>
          caches.match(event.request).then(cached => {
            if (cached) return cached;
            if (event.request.mode === 'navigate') return caches.match('./index.html');
            return undefined;
          })
        )
    );
    return;
  }

  // Static local assets remain cache-first for fast, reliable offline use.
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request)
        .then(response => cacheNetworkResponse(event.request, response))
        .catch(() => caches.match(event.request));
    })
  );
});
