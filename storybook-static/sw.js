if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js')
      let a = Promise.resolve()
      return (
        s[e] ||
          (a = new Promise(async (a) => {
            if ('document' in self) {
              const s = document.createElement('script')
              ;(s.src = e), document.head.appendChild(s), (s.onload = a)
            } else importScripts(e), a()
          })),
        a.then(() => {
          if (!s[e]) throw new Error(`Module ${e} didn’t register its module`)
          return s[e]
        })
      )
    },
    a = (a, s) => {
      Promise.all(a.map(e)).then((e) => s(1 === e.length ? e[0] : e))
    },
    s = { require: Promise.resolve(a) }
  self.define = (a, r, n) => {
    s[a] ||
      (s[a] = Promise.resolve().then(() => {
        let s = {}
        const t = { uri: location.origin + a.slice(1) }
        return Promise.all(
          r.map((a) => {
            switch (a) {
              case 'exports':
                return s
              case 'module':
                return t
              default:
                return e(a)
            }
          })
        ).then((e) => {
          const a = n(...e)
          return s.default || (s.default = a), s
        })
      }))
  }
}
define('./sw.js', ['./workbox-432e0d0b'], function (e) {
  'use strict'
  importScripts(),
    e.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/W1gOrfzoCB1NeIrk2K-m0/_buildManifest.js',
          revision: 'fb96ae7926f5104f50f0cf1b3a23a9b5'
        },
        {
          url: '/_next/static/W1gOrfzoCB1NeIrk2K-m0/_ssgManifest.js',
          revision: 'abee47769bf307639ace4945f9cfd4ff'
        },
        {
          url: '/_next/static/W1gOrfzoCB1NeIrk2K-m0/pages/_app.js',
          revision: '6c506e980a1fe520ab569979748a9f29'
        },
        {
          url: '/_next/static/W1gOrfzoCB1NeIrk2K-m0/pages/_error.js',
          revision: 'e8d6ef586da259ada3e1086fe5aeda95'
        },
        {
          url: '/_next/static/W1gOrfzoCB1NeIrk2K-m0/pages/index.js',
          revision: '0a147220ad79ef37383a914cfe98d089'
        },
        {
          url:
            '/_next/static/chunks/afe88bac98bd9a6b7cc2672853477fbc3c6e48ce.90e7c089fc47e30f0408.js',
          revision: '502b957bace725c135ed6cc0ea58904f'
        },
        {
          url:
            '/_next/static/chunks/d17ad440de314ce100765b9aa34a829399c9bfe0.58e90d8c4b4ce1ae9cb5.js',
          revision: '5bbf71a5cd4692e1dc6fda656d3a9f73'
        },
        {
          url: '/_next/static/chunks/framework.c6faae2799416a6da8e8.js',
          revision: 'a07dacbb502f5257565ceb7d460e71e6'
        },
        {
          url: '/_next/static/runtime/main-ff30b6df74bc25e5b53a.js',
          revision: 'b9dc15310d1ad03fd4423f93320b4a94'
        },
        {
          url: '/_next/static/runtime/polyfills-f1a72475392243fcf9b5.js',
          revision: 'e472d47f8ab63cc45bae6a9ea4eec0c5'
        },
        {
          url: '/_next/static/runtime/webpack-c212667a5f965e81e004.js',
          revision: 'f5e6e2fca3144cc944812cfa3547f475'
        },
        {
          url: '/img/hero-illustration.svg',
          revision: '5fd5143cba1046a214d9a359fce22e89'
        },
        {
          url: '/img/icon-192.png',
          revision: 'd27169d080684ebb57b8387d05c4b444'
        },
        {
          url: '/img/icon-512.png',
          revision: 'f1d74b43a3832183202483a40d9e9d84'
        },
        { url: '/img/logo.svg', revision: '202525302ad30aca5b2b790d4b0b5796' },
        { url: '/manifest.json', revision: '2b19621eb00c338ee252b1c8dda19b2a' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'POST'
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    )
})
