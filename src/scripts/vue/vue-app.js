import Vue from 'vue';

const initVue = () => {
  const vueApp = new Vue({
    el: '#vueapp',
    data: {
      display: 'visible'
    }
  });
};

export default initVue;
