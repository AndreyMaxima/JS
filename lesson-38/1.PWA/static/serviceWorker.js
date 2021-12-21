const assets = [
  '/',
  '/js/app.js',
  '/styles/style.css',
  '/img/logo.png'
]

const staticCache = 'static-v2'

self.addEventListener('install', async () => {
  const cache = await caches.open(staticCache)
  cache.addAll(assets)
})

self.addEventListener('activate', async () => {
  const cacheNames = await caches.keys()
  await Promise.all(
    cacheNames.map(cacheName => cacheName !== staticCache && caches.delete(cacheName))
  )
})

self.addEventListener('fetch', (event) => {
  const {request} = event
  if(new URL(request.url).origin === location.origin) {
    event.respondWith(cacheFirst(request))
  }
})

async function cacheFirst(req) {
  const cached = await caches.match(req)
  if(cached) {
    console.log(`${req.url} from cache`)
    return cached
  } else {
    console.log(`${req.url} from net`)
    return await fetch(req)
  }
}
