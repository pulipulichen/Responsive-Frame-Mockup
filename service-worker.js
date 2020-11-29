/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/* global self, caches */

// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v2020-1129-1536';
const RUNTIME = 'runtime';

/**
 * How to build cache list?
 * 
 * 1. FilelistCreator 
 * 2. String replace
 */

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  './index.html',
  
  //'./dist/', // Alias for index.html
  './components/app-menu-config.less',
  './components/app-menu-config.vue',
  './components/app-menu.less',
  './components/app-menu.vue',
  './components/device-notification-bar.less',
  './components/device-notification-bar.vue',
  './components/frame-browser.less',
  './components/frame-browser.vue',
  './components/frame-phone-landscape.less',
  './components/frame-phone-landscape.vue',
  './components/frame-phone-portrait.less',
  './components/frame-phone-portrait.vue',
  './components/frame-phone.less',
  './components/frame-phone.vue',
  './components/frame-tablet-landscape.less',
  './components/frame-tablet-landscape.vue',
  './components/frame-tablet-portrait.less',
  './components/frame-tablet-portrait.vue',
  './img/demo/demo-browser-reading.jpg',
  './img/demo/demo-browser-reading.png',
  './img/demo/demo-browser.png',
  './img/demo/demo-phone-landscape.jpg',
  './img/demo/demo-phone-portrait.jpg',
  './img/favicon/android-icon-144x144.png',
  './img/favicon/android-icon-192x192.png',
  './img/favicon/android-icon-36x36.png',
  './img/favicon/android-icon-48x48.png',
  './img/favicon/android-icon-72x72.png',
  './img/favicon/android-icon-96x96.png',
  './img/favicon/apple-icon-114x114.png',
  './img/favicon/apple-icon-120x120.png',
  './img/favicon/apple-icon-144x144.png',
  './img/favicon/apple-icon-152x152.png',
  './img/favicon/apple-icon-180x180.png',
  './img/favicon/apple-icon-57x57.png',
  './img/favicon/apple-icon-60x60.png',
  './img/favicon/apple-icon-72x72.png',
  './img/favicon/apple-icon-76x76.png',
  './img/favicon/apple-icon-precomposed.png',
  './img/favicon/apple-icon.png',
  './img/favicon/browserconfig.xml',
  './img/favicon/favicon-16x16.png',
  './img/favicon/favicon-32x32.png',
  './img/favicon/favicon-96x96.png',
  './img/favicon/favicon.ico',
  './img/favicon/favicon.png',
  './img/favicon/favicon.svg',
  './img/favicon/favicon144.png',
  './img/favicon/manifest.json',
  './img/favicon/ms-icon-144x144.png',
  './img/favicon/ms-icon-150x150.png',
  './img/favicon/ms-icon-310x310.png',
  './img/favicon/ms-icon-70x70.png',
  './img/frames/browser/google-chrome-light/bottom.png',
  './img/frames/browser/google-chrome-light/left-bottom.png',
  './img/frames/browser/google-chrome-light/left-top.png',
  './img/frames/browser/google-chrome-light/left.png',
  './img/frames/browser/google-chrome-light/right-bottom.png',
  './img/frames/browser/google-chrome-light/right-top.png',
  './img/frames/browser/google-chrome-light/right.png',
  './img/frames/browser/google-chrome-light/top.png',
  './img/frames/phone-landscape/bottom2right.png',
  './img/frames/phone-landscape/middle-left2bottom.png',
  './img/frames/phone-landscape/middle-right2top.png',
  './img/frames/phone-landscape/middle2center.png',
  './img/frames/phone-landscape/top2left.png',
  './img/frames/phone-portrait/bottom.png',
  './img/frames/phone-portrait/middle-left.png',
  './img/frames/phone-portrait/middle-right.png',
  './img/frames/phone-portrait/middle.png',
  './img/frames/phone-portrait/top.png',
  './img/frames/tablet-landscape/bottom2right.png',
  './img/frames/tablet-landscape/middle-left2bottom.png',
  './img/frames/tablet-landscape/middle-right2top.png',
  './img/frames/tablet-landscape/top2left.png',
  './img/frames/tablet-portrait/bottom.png',
  './img/frames/tablet-portrait/middle-left.png',
  './img/frames/tablet-portrait/middle-right.png',
  './img/frames/tablet-portrait/top.png',
  './img/frames/phone-portrait.png',
  './img/frames/tablet-frame-landscape.png',
  './img/frames/tablet-frame-portrait.png',
  './scripts/vue-app-components.js',
  './scripts/vue-app-computed.js',
  './scripts/vue-app-data.js',
  './scripts/vue-app-methods.js',
  './scripts/vue-app-mounted.js',
  './scripts/vue-app-watch.js',
  './scripts/vue-app.js',
  './styles/import.less',
  './styles/styles.less',
  './vendors/dom-to-img/dom-to-image.min.js',
  './vendors/jquery/jquery.min.js',
  './vendors/less/less.min.js',
  './vendors/semantic-ui/themes/default/assets/fonts/icons.svg',
  './vendors/semantic-ui/themes/default/assets/fonts/icons.ttf',
  './vendors/semantic-ui/themes/default/assets/fonts/icons.woff',
  './vendors/semantic-ui/themes/default/assets/fonts/icons.woff2',
  './vendors/semantic-ui/semantic.min.css',
  './vendors/semantic-ui/semantic.min.js',
  './vendors/vue/vue.min.js',
  './vendors/vue/httpVueLoader.js',
  './vendors/date-helper.js'
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});