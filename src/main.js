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
  beforeCreate() {
    this.$store.commit('INITIALIZE_STORE');
  },
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

store.subscribe((mutation, state) => {
  if (mutation.type === 'ADD_SONG_TO_FAVORITES' || mutation.type === 'REMOVE_SONG_FROM_FAVORITES') {
    localStorage.setItem('mySavedSongs', JSON.stringify(state.mySongs));
  }
});
