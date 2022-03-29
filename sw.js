self.addEventListener( "install", event => {
  self.skipWaiting();
});


self.addEventListener('fetch', function(event) {
  event.respondWith(new Response("error!"))
});
