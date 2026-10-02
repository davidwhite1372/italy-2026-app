const CACHE = 'italy-2026-github-v12-0-0-final-itinerary';
const APP_SHELL = [
  './',
  './index.html',
  './data.js',
  './assets/guides/rome-tour-voucher-1212654.pdf',
  './assets/guides/florence-tour-voucher-1212654.pdf',
  './assets/guides/tour-payment-confirmation-1212654.png',
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
  ,'./assets/guides/cph-connection-guide-outbound.png'
  ,'./assets/guides/venice-vaporetto-map-2026.png'
  ,'./assets/guides/laundry-king-florence.png'
  ,'./assets/guides/boston-terminal-a-to-e.png'
  ,'./assets/guides/italy-camera-cheat-sheet-samsung-s23-ultra.png',
  './assets/guides/cph-connection-guide-return.png',
  './assets/guides/cph-connection-guide-return.pdf',
  './assets/guides/rome-metro-transfer-guide.png',
  './assets/guides/rome-metro-transfer-guide.pdf',
  './assets/guides/rome-return-transfer-guide.png',
  './assets/guides/rome-return-transfer-guide.pdf',
  './assets/guides/florence-tour-outbound-guide.png',
  './assets/guides/florence-tour-outbound-guide.pdf',
  './assets/guides/florence-tour-return-guide.png',
  './assets/guides/florence-tour-return-guide.pdf',
  './assets/guides/venice-tour-outbound-guide.png',
  './assets/guides/venice-tour-outbound-guide.pdf',
  './assets/guides/venice-tour-return-guide.png',
  './assets/guides/venice-tour-return-guide.pdf',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(async cache => {
        // Core app files AND admission vouchers must be available before activation.
        // A failed optional guide must not prevent a working offline installation.
        const required = new Set(['./', './index.html', './data.js', './manifest.json',
          './assets/guides/rome-tour-voucher-1212654.pdf',
          './assets/guides/florence-tour-voucher-1212654.pdf']);
        const failures = [];
        await Promise.all(APP_SHELL.map(async asset => {
          try {
            const response = await fetch(asset, { cache: 'reload' });
            if (!response.ok || response.type === 'opaque') throw new Error(`HTTP ${response.status}`);
            await cache.put(asset, response);
          } catch (error) {
            console.warn('Offline cache failed:', asset, error);
            if (required.has(asset)) failures.push(asset);
          }
        }));
        if (failures.length) throw new Error(`Required offline assets missing: ${failures.join(', ')}`);
      })
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
