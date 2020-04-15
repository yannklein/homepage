import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import './fonts/libre-baskerville-v5-latin-regular.woff';
import './fonts/libre-baskerville-v5-latin-regular.woff2';

import './index.html';
import './index.scss';
import './scripts/script';
import { initThree, addBackground, addIntroPopup } from './scripts/initThree';

OfflinePluginRuntime.install();

if (document.querySelector('.background')) {
  const bgWorld = initThree(document.querySelector('.background'));
  addBackground(bgWorld);
}

if (document.querySelector('.intro-popup')) {
  const popupScene = initThree(document.querySelector('.intro-popup'));
  addIntroPopup(popupScene);
}
