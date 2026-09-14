const CACHE_NAME = "todaycampus-pwa-v6-agreement-flow";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith("todaycampus-pwa-") && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

async function networkFirst(request, fallbackUrl){
  try{
    const response = await fetch(request, {cache:"no-store"});
    if(response && response.ok){
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone()).catch(()=>{});
    }
    return response;
  }catch(e){
    const cached = await caches.match(request);
    if(cached) return cached;

    if(fallbackUrl){
      const fallback = await caches.match(fallbackUrl);
      if(fallback) return fallback;
    }
    throw e;
  }
}

self.addEventListener("fetch", event => {
  if(event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  if(url.origin !== self.location.origin) return;

  // 页面导航优先联网获取新版；断网时回退到缓存首页。
  if(event.request.mode === "navigate"){
    event.respondWith(networkFirst(event.request, "./index.html"));
    return;
  }

  // manifest 也优先获取新版。
  if(url.pathname.endsWith("/manifest.webmanifest")){
    event.respondWith(networkFirst(event.request, "./manifest.webmanifest"));
    return;
  }

  // 图标等静态资源优先使用缓存，缺失时再联网。
  event.respondWith(
    caches.match(event.request).then(cached => {
      if(cached) return cached;

      return fetch(event.request).then(response => {
        if(response && response.ok){
          const copy = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, copy))
            .catch(()=>{});
        }
        return response;
      });
    })
  );
});
