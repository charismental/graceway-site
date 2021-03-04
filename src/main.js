import Vue from 'vue';
import VueMeta from 'vue-meta';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // beforeCreate() {
  //   const path = localStorage.getItem('path');
  //   if (path && path.length) {
  //     localStorage.removeItem('path');
  //     this.$router.push(`/${path}`);
  //   }
  // },
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

store.subscribe((mutation, state) => {
  localStorage.setItem('mySavedSongs', JSON.stringify(state.mySongs));
});
