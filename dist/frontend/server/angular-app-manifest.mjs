
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/cadastro"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/mais-sobre"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5085, hash: '1f03dca9d1058f7698df59f572d3e022bbb1bbc6149a89817e3f730554be85ee', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1057, hash: 'd8130ef6d4844f05d21d69ae644d1a3b57122c6c8eb67a27eaba756dcea72b07', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12314, hash: '29f90d32104998d74b99bf5632e6998eaaf1f798286700d044157a5420162dee', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 5229, hash: '6c274a48d7b3d910554421df6449a55fca88bc3fd976a62068f39d5615b704fb', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'cadastro/index.html': {size: 9841, hash: 'e720e25da17dc081838207287b45723d1ad4e4f742e0faa87dd1c7faaf3c9a4c', text: () => import('./assets-chunks/cadastro_index_html.mjs').then(m => m.default)},
    'mais-sobre/index.html': {size: 5238, hash: '995c035c31c9d0f35c0f795149daf8f0b752558be9a8b0f635a21728605f7434', text: () => import('./assets-chunks/mais-sobre_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
