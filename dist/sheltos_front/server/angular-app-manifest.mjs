
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/theme/slider-filter-search",
    "route": "/"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DM2XZR2T.js",
      "chunk-ROAKVZTB.js",
      "chunk-FMNWCTSM.js"
    ],
    "route": "/theme"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DM2XZR2T.js",
      "chunk-ROAKVZTB.js",
      "chunk-FMNWCTSM.js"
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
    'index.csr.html': {size: 68612, hash: '38a20ef1256d5073a22448e0c2fa03f67539004e1608d659d18c763a7c3a4669', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 61898, hash: 'c5da75204a3f0a06466102b4d6214250fe27c669797505674ebe751f0499f8ce', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6PJOQJNO.css': {size: 922002, hash: 'EQrwVqgb/Jc', text: () => import('./assets-chunks/styles-6PJOQJNO_css.mjs').then(m => m.default)}
  },
};
