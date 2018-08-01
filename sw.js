self.addEventListener('install', function(event) {
    console.log('Installing cache...');
    event.waitUntil(
      caches.open('restCache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/css/styles.css',
          '/js/main.js',
          '/restaurant.html',
          '/js/dbhelper.js',
          '/js/restaurant_info.js',
          '/data/restaurants.json',
          '/img/1.jpg',
          '/img/2.jpg',
          '/img/3.jpg',
          '/img/4.jpg',
          '/img/5.jpg',
          '/img/6.jpg',
          '/img/7.jpg',
          '/img/8.jpg',
          '/img/9.jpg',
          '/img/10.jpg',

        ]);
      })
    );
  });

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });

 

/* Mozilla https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
was a usefull source in understanding this*/

  
  
 