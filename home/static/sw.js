self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  console.log('sw activate');
  clients.claim();
});
async function ev(event){
    req = new Request(`http://127.0.0.1:8000/${event.request.url}`, {
      headers: event.request.headers,
      method: event.request.method,
      // mode: event.request.mode,
      credentials: event.request.credentials,
      cache: event.request.cache,
      redirect: event.request.redirect,
      referrer: event.request.referrer
  });
  
  console.log(req);
  return await fetch(req)
}
self.addEventListener('fetch', (event)=> {
  event.preventDefault();
  event.respondWith(ev(event))
});

