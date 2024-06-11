
const CACHE_NAME = 'image-cache';
const DYNAMIC_CACHE = 'dynamic-image-cache';

self.addEventListener('install', (event) => {
	self.skipWaiting(); // Activate worker immediately
});

self.addEventListener('activate', (event) => {
	// When activated - clear unrelevant caches
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.filter((cacheName) => cacheName !== CACHE_NAME && cacheName !== DYNAMIC_CACHE)
					.map((cacheName) => caches.delete(cacheName))
			);
		})
	);
});

self.addEventListener('fetch', (event) => {
	// Check if fetch request is for image - and check if exists in cache
	if (event.request.url.match(/(picsum|jpeg|jpg|png|gif|svg)$/)) {
		event.respondWith(
			caches.match(event.request)
				.then((response) => {
					if (response) return response
					else return fetch(event.request)
						.then((fetchRes) => {
							return caches.open(DYNAMIC_CACHE).then((cache) => {
								cache.put(event.request.url, fetchRes.clone());
								return fetchRes;
							})
						}).catch((error) => {
							console.log('error fetching image', error)
						})
				})
		);
	}
});
