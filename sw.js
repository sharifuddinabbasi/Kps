self.addEventListener('install', (e) => {
  self.skipWaiting();
  console.log('Service Worker Installed & Updated');
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker Activated');
});

self.addEventListener('fetch', (e) => {
  // Handles background request fetching
});
