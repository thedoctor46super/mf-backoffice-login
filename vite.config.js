import vue from '@vitejs/plugin-vue';

export default {
  rollupOptions: {
    input: 'src/main.js',
    format: 'system',
    preserveEntrySignatures: true,
    output: {
      file: 'dist/bundle.js',
      format: 'iife',
    },
  },
  base: '/mf-backoffice-login/',
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: '/src',
        },
      },
    }),
  ],
};
