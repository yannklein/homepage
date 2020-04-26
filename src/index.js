import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import './index.html';
import './index.scss';

import { initThree, addBackground, addIntroPopup } from './scripts/initThree';
import initSideBarFilter from './scripts/sidebar';

OfflinePluginRuntime.install();

// Load GIFs only if not mobile
if (window.innerWidth >= 480) {
  const holoboothGif =
    'https://res.cloudinary.com/yanninthesky/video/upload/w_640,h_640,c_fill,e_loop/wqz0lgbspas5no6eiwtq.gif';
  document.querySelector('.card-img-gif').src = holoboothGif;
}

// Initialize ThreeJS background
const bgElement = document.querySelector('.background');
if (bgElement) {
  const bgWorld = initThree(bgElement);
  addBackground(bgElement, bgWorld);
}
// Initialize ThreeJS intro popup
const ipElement = document.querySelector('.intro-popup');
if (ipElement && window.innerWidth >= 480) {
  const popupScene = initThree(ipElement);
  addIntroPopup(ipElement, popupScene);
}

// Init sidebar
const sidebarLeft = document.querySelector('.sidebar-left');
if (sidebarLeft) {
  initSideBarFilter(sidebarLeft);
}
