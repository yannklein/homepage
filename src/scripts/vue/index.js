import Vue from 'vue';
import App from './App.vue';

import projects from '../../data/projects.json';

/* eslint-disable no-new */

new Vue({
  el: '#vueapp',
  template: '<App :projects="projects" />',
  data: {
    projects
  },
  components: { App }
});
