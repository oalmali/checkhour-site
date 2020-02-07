/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-bae01f373c7e2e810551.js"
  },
  {
    "url": "styles.6cec96564ff15f97be86.css"
  },
  {
    "url": "styles-636d224c113bc282a39b.js"
  },
  {
    "url": "app-084cfa4479d1ce4415b5.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-aae596b03bf932719638.js"
  },
  {
    "url": "index.html",
    "revision": "ff9575f64828c9d36d2d0f0aa16510a5"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "399ea86f06d0fb53da833a1bfea49b0c"
  },
  {
    "url": "component---src-pages-index-js-f182614bceceaa4f7df4.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "7a60a446aade3b06dabeb94f9e073402"
  },
  {
    "url": "component---src-pages-404-js-0b9ca257621befe182f4.js"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "9d9ad5aff59e4b5eb69defbe28fd2614"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "b62182c14fc9f8f3742ede211e5e074d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});