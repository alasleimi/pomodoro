"use strict"
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
self.addEventListener('notificationclick', function(event) {  

  
  event.notification.close();
  clients.matchAll().then(function(clientList) {
    
    for(var i = 0 ; i < clientList.length ; i++) {
      
      clientList[i].postMessage(JSON.stringify({notificationAction: event.action}));
     
    }
  });
}, false);