
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
    'index.csr.html': {size: 68612, hash: 'b3a989e3db286db620aa355f77a619f0a81439d2bd51a58a1a2ac5016f46aca6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 61898, hash: 'ffbba94295c86ed2a92ee3c3c8c8cc0cda572e3f35b910d56a455b171b3e6e44', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-PD3LVGPZ.css': {size: 921981, hash: 'bBSXNRVgqe0', text: () => import('./assets-chunks/styles-PD3LVGPZ_css.mjs').then(m => m.default)}
  },
};
