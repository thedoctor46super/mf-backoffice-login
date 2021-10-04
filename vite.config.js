import vue from '@vitejs/plugin-vue';
import externalGlobals from 'rollup-plugin-external-globals';

const path = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: '/src',
        },
      },
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'BackofficeLogin',
      fileName: (format) => `backoffice-login.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'vue-router', 'single-spa'],
      plugins: [
        externalGlobals({
          vue: 'vue',
          'vue-router': 'vue-router',
        }),
      ],
      // output: {
      //   // Provide global variables to use in the UMD build
      //   // for externalized deps
      //   globals: {
      //     vue: 'Vue',
      //   },
      // },
    },
  },
});
