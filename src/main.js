import { createApp, h } from 'vue';
import App from './App.vue';
import singleSpaVue from 'single-spa-vue';
import router from './router/index';
import GAuth from 'vue3-google-oauth2';

// createApp(App).mount('#app')

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecyle-props
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
        },
      });
    },
  },
  handleInstance: (app) => {
    app.use(router);

    app.use(GAuth, {
      clientId:
        '706365197587-enedvlgphegpc7sb5c401f4lsmbip4po.apps.googleusercontent.com',
    });
  },
});
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
