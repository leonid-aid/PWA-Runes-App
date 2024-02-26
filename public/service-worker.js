const CACHE_NAME = 'testCachebuild';
const urlsToCache = [
  '/manifest.json',
  '/favicon.ico',
  '/index.html',
  '/logo192.png',
  '/logo512.png',
  '/start.MP3',
  '/tr1.MP3',
  '/tr2.MP3',
  '/tr3.MP3',
  '/tr4.MP3',
  '/tr5.MP3',
  '/tr6.MP3',

  '/static/js/main.chunk.js',
  '/static/js/vendors~main.chunk.js',
  '/static/js/bundle.js',
  '/static/css/main.chunk.css',

  '/static/media/Back40.svg',
  '/static/media/backgroundhoney.png',
  '/static/media/exit24.svg',
  '/static/media/exit40.svg',
  '/static/media/icon_share_40.svg',
  '/static/media/icon_sound_off_24.svg',
  '/static/media/icon_sound_on_24.svg',
  '/static/media/Odin3401.jpg',
  '/static/media/кнопка.png',
  '/static/media/кнопка2.png', 
     
  '/static/media/Algizup.svg',
  '/static/media/Algizdown.svg',
  '/static/media/Ansuzup.svg',
  '/static/media/Ansuzdown.svg',
  '/static/media/Berkanaup.svg',
  '/static/media/Berkanadown.svg',
  '/static/media/Dagaz.svg',
  '/static/media/Ehwazup.svg',
  '/static/media/Ehwazdown.svg',
  '/static/media/Eihwaz.svg',
  '/static/media/Fehuup.svg',
  '/static/media/Fehudown.svg',
  '/static/media/Gebo.svg',
  '/static/media/Hagalaz.svg',
  '/static/media/Inguz.svg',
  '/static/media/Isa.svg',
  '/static/media/Jera.svg',
  '/static/media/Kanoup.svg',
  '/static/media/Kanodown.svg',
  '/static/media/Laguzup.svg',
  '/static/media/Laguzdown.svg',
  '/static/media/Mannazup.svg',
  '/static/media/Mannazdown.svg',
  '/static/media/Nauthizup.svg',
  '/static/media/Nauthizdown.svg',
  '/static/media/Othilup.svg',
  '/static/media/Othildown.svg',
  '/static/media/Perthup.svg',
  '/static/media/Perthdown.svg',
  '/static/media/Raidoup.svg',
  '/static/media/Raidodown.svg',
  '/static/media/Sowelu.svg',
  '/static/media/Teiwazup.svg',
  '/static/media/Teiwazdown.svg',
  '/static/media/Thurisazup.svg',
  '/static/media/Thurisazdown.svg',
  '/static/media/Uruzup.svg',
  '/static/media/Uruzdown.svg',
  '/static/media/Wunjoup.svg',
  '/static/media/Wunjodown.svg',
  '/static/media/Wyrd.svg',   
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return Promise.all(urlsToCache.map((url) => {
          return cache.add(url).catch((reason) => {
            console.log(`Failed to cache ${url}: ${reason}`);
          });
        }));
      })
      .then(() => {
        console.log('Cache successfully added');
      })
      .catch((error) => {
        console.error('Cache installation failed:', error);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
 