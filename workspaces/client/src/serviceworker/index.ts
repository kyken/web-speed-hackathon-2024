/// <reference types="@types/serviceworker" />
import PQueue from 'p-queue';

// import { jitter } from './jitter';
import { transformJpegXLToBmp } from './transformJpegXLToBmp';
import { zstdFetch as fetch } from './zstdFetch';

// ServiceWorker が負荷で落ちないように並列リクエスト数を制限する
const queue = new PQueue({
  concurrency: 5,
});

const cacheName = 'image-cache-v1';

self.addEventListener('install', (ev: ExtendableEvent) => {
  ev.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (ev: ExtendableEvent) => {
  ev.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (ev: FetchEvent) => {
  ev.respondWith(
    queue.add(() => onFetch(ev.request), {
      throwOnTimeout: true,
    }),
  );
});

async function onFetch(request: Request): Promise<Response> {
  // サーバーの負荷を分散するために Jitter 処理をいれる
  // await jitter();
  // const cacheMatch = await caches.match(request)
  console.log(request.url);
  console.log(request.method);
  if (request.url.includes('/images/') && request.method === 'GET') {
    const cacheMatchResponse = await caches.match(request);
    if (cacheMatchResponse) {
      return cacheMatchResponse;
    }
    const res = await fetch(request);
    if (res.headers.get('Content-Type') === 'image/jxl') {
      const transformedResponse = await transformJpegXLToBmp(res);
      const cache = await caches.open(cacheName);
      cache.put(request, transformedResponse.clone());
      return transformedResponse;
    } else {
      const cache = await caches.open(cacheName);
      cache.put(request, res.clone());
      return res;
    }
  } else {
    return await fetch(request);
  }

  // if (res.headers.get('Content-Type') === 'image/jxl') {
  //   return transformJpegXLToBmp(res);
  // } else {
  //   return res;
  // }
}
