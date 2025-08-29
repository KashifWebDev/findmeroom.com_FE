
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "preload": [
      "chunk-XUKRWY2D.js",
      "chunk-YGD7QDLI.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XUKRWY2D.js",
      "chunk-YGD7QDLI.js",
      "chunk-EF3HPE5B.js",
      "chunk-ZZZQDLGF.js"
    ],
    "route": "/theme"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XUKRWY2D.js",
      "chunk-YGD7QDLI.js",
      "chunk-EF3HPE5B.js",
      "chunk-ZZZQDLGF.js"
    ],
    "route": "/theme/slider-filter-search"
  },
  {
    "renderMode": 0,
    "redirectTo": "/page/other-pages/404",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 68612, hash: '0628df9f702d99ffff7335d7863789635a73013920985ecba2e68de97e3c1ff6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 61898, hash: '4c83b2c6491386e7dbcc74e0005428018f013905a04652560c175a5c029ce410', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5VP2R62B.css': {size: 921987, hash: 'eSR8PfTI9y8', text: () => import('./assets-chunks/styles-5VP2R62B_css.mjs').then(m => m.default)}
  },
};
