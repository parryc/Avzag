importScripts("/precache-manifest.7123285452199b168cb247e0304313f3.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// This is the service worker with the Cache-first network

const CACHE = "sw-avzag-precache";
const precacheFiles = self.__precacheManifest.map(f => f.url);

self.addEventListener("install", function (event) {
    console.log("[PWA Builder] Install Event processing");
    console.log("[PWA Builder] Skip waiting on install");
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE).then(function (cache) {
            console.log("[PWA Builder] Caching pages during install");
            return cache.addAll(precacheFiles);
        })
    );
});

// Allow sw to control of current page
self.addEventListener("activate", function (event) {
    console.log("[PWA Builder] Claiming clients for current page");
    event.waitUntil(self.clients.claim());
});

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", function (event) {
    if (event.request.method !== "GET") return;

    event.respondWith(
        fromCache(event.request).then(
            function (response) {
                // The response was found in the cache so we responde with it and update the entry

                // This is where we call the server to get the newest version of the
                // file to use the next time we show view
                event.waitUntil(
                    fetch(event.request).then(function (response) {
                        return updateCache(event.request, response);
                    })
                );

                return response;
            },
            async function () {
                // The response was not found in the cache so we look for it on the server
                try {
                    const response = await fetch(event.request);
                    // If request was success, add or update it in the cache
                    event.waitUntil(updateCache(event.request, response.clone()));
                    return response;
                }
                catch (error) {
                    console.log("[PWA Builder] Network request failed and no cache." + error);
                }
            }
        )
    );
});

async function fromCache(request) {
    // Check to see if you have it in the cache
    // Return response
    // If not in the cache, then return
    const cache = await caches.open(CACHE);
    const matching = await cache.match(request);
    if (!matching || matching.status === 404) {
        return Promise.reject("no-match");
    }
    return matching;
}

async function updateCache(request, response) {
    const cache = await caches.open(CACHE);
    return cache.put(request, response);
}

