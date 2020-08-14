import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import './index.html';
import './index.scss';

// Init Vue.js
import './scripts/vue/index';

import { initThree, addBackground, addIntroPopup } from './scripts/three/initThree';
import initSideBarFilter from './scripts/sidebar';

OfflinePluginRuntime.install();

// Load GIFs only if not mobile
// if (window.innerWidth >= 480) {
//   document.querySelectorAll('.card-img-gif').forEach(cardWithGif => {
//     cardWithGif.src = cardWithGif.src.replace('png', 'webm');
//   });
// }

// Initialize ThreeJS background
const bgElement = document.querySelector('.background');
if (bgElement) {
  const bgWorld = initThree('backgroundWorld', bgElement, true);
  addBackground(bgElement, bgWorld);
}
// Initialize ThreeJS intro popup
const ipElement = document.querySelector('.intro-popup');
if (ipElement) {
  if (window.innerWidth >= 480) {
    const popupScene = initThree('introWorld', ipElement);
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
