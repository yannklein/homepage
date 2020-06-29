import Vue from 'vue';

import initCardComponent from './vue-card';

const initVue = () => {
  initCardComponent();
  const vueApp = new Vue({
    el: '#vueapp'
  });
};

export default initVue;
