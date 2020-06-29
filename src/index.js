import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import './index.html';
import './index.scss';

import { initThree, addBackground, addIntroPopup } from './scripts/initThree';
import initSideBarFilter from './scripts/sidebar';
import initVue from './scripts/vue/vue-app';

OfflinePluginRuntime.install();

// Init Vue.js
initVue();

// Load GIFs only if not mobile
if (window.innerWidth >= 480) {
  document.querySelectorAll('.card-img-gif').forEach(cardWithGif => {
    cardWithGif.src = cardWithGif.src.replace('png', 'gif').replace('c_fill', 'c_fill,e_loop');
  });
}

// Initialize ThreeJS background
const bgElement = document.querySelector('.background');
if (bgElement) {
  const bgWorld = initThree(bgElement);
  addBackground(bgElement, bgWorld);
}
// Initialize ThreeJS intro popup
const ipElement = document.querySelector('.intro-popup');
if (ipElement) {
  if (window.innerWidth >= 480) {
    const popupScene = initThree(ipElement);
    addIntroPopup(ipElement, popupScene);
  } else {
    ipElement.style.display = 'none';
  }
}

// Init sidebar
const sidebarLeft = document.querySelector('.sidebar-left');
if (sidebarLeft) {
  initSideBarFilter(sidebarLeft);
}
