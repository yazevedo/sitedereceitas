
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
    'index.csr.html': {size: 5085, hash: 'f356a1fba313f36393671dc3945cd9e7177a26f76955cd9b4e7bd0dadbe38e4a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1057, hash: '0fe7d60721d1b9e6f3829e66c220d011996c805d540267c289ec720ce51fce3e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'cadastro/index.html': {size: 9841, hash: '15df11d6fcf109cc66e46f49fd3c20912e1cce577fba06ca10ca1f44ad22353c', text: () => import('./assets-chunks/cadastro_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 5229, hash: '94e6a790aa53c0580553d807859989f014e46df36caec0df8dce225407abd448', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 12315, hash: 'b26dee2f91a4bfe579048b9ad3a720bb1e8fe366de1e82324bff09ccfe986107', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'mais-sobre/index.html': {size: 5238, hash: '0fcf01e28e73f6b7ecd167fea2b489b73fc98cf696878b092346cb4a09a3d3ad', text: () => import('./assets-chunks/mais-sobre_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
