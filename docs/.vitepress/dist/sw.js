if (!self.define) {
  let e,
    s = {};
  const n = (n, i) => (
    (n = new URL(n + '.js', i).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, l) => {
    const r = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[r]) return;
    let d = {};
    const o = (e) => n(e, r),
      t = { module: { uri: r }, exports: d, require: o };
    s[r] = Promise.all(i.map((e) => t[e] || o(e))).then((e) => (l(...e), d));
  };
}
define(['./workbox-e0782b83'], function (e) {
  'use strict';
  self.addEventListener('message', (e) => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: 'assets/app.f6179061.js', revision: null },
        { url: 'assets/chunks/VPAlgoliaSearchBox.9c42657a.js', revision: null },
        { url: 'assets/components_button.md.b70b5636.js', revision: null },
        { url: 'assets/components_button.md.b70b5636.lean.js', revision: null },
        { url: 'assets/guide_components_writing.md.5d0c9a32.js', revision: null },
        { url: 'assets/guide_components_writing.md.5d0c9a32.lean.js', revision: null },
        { url: 'assets/guide_docs_add-page.md.aa9eefa2.js', revision: null },
        { url: 'assets/guide_docs_add-page.md.aa9eefa2.lean.js', revision: null },
        { url: 'assets/guide_docs_components.md.e6c5041c.js', revision: null },
        { url: 'assets/guide_docs_components.md.e6c5041c.lean.js', revision: null },
        { url: 'assets/guide_getting-started.md.34987fff.js', revision: null },
        { url: 'assets/guide_getting-started.md.34987fff.lean.js', revision: null },
        { url: 'assets/guide_introduce.md.d5a15d15.js', revision: null },
        { url: 'assets/guide_introduce.md.d5a15d15.lean.js', revision: null },
        { url: 'assets/index.md.0d93afef.js', revision: null },
        { url: 'assets/index.md.0d93afef.lean.js', revision: null },
        { url: 'assets/style.55c07a61.css', revision: null },
        { url: 'registerSW.js', revision: '1872c500de691dce40960bb85481de07' },
        { url: 'pwa/android-chrome-192x192.png', revision: 'a5bff5ef047458deca74d03df602cf86' },
        { url: 'pwa/android-chrome-512x512.png', revision: 'be16de3784f921baf2b9421c723d7aad' },
        { url: 'manifest.webmanifest', revision: '4ab8823cecaad2968b3026ddfa3599c3' },
      ],
      {},
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL('index.html')));
});
