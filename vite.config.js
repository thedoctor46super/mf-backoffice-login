import vue from '@vitejs/plugin-vue';

export default {
  rollupOptions: {
    input: 'src/main.js',
    format: 'system',
    preserveEntrySignatures: true,
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
