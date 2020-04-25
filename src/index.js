import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import './index.html';
import './index.scss';

import { initThree, addBackground, addIntroPopup } from './scripts/initThree';
import initSideBarFilter from './scripts/sidebar';
import outroLoading from './scripts/loading';

OfflinePluginRuntime.install();

// Initialize ThreeJS background
const bgElement = document.querySelector('.background');
if (bgElement) {
  const bgWorld = initThree(bgElement);
  addBackground(bgElement, bgWorld);
}
// Initialize ThreeJS intro popup
const ipElement = document.querySelector('.intro-popup');
if (ipElement) {
  const popupScene = initThree(ipElement);
  addIntroPopup(ipElement, popupScene);
}

// Init sidebar
const sidebarLeft = document.querySelector('.sidebar-left');
if (sidebarLeft) {
  initSideBarFilter(sidebarLeft);
}

// const loadingElement = document.querySelector('.loading-mask');
// if (loadingElement) {
//   outroLoading(document, loadingElement);
// }
