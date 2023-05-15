require('es6-promise').polyfill();
import 'polyfill-nodelist-foreach';

import modal from './modules/modal';
import slider from './modules/slider';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
  modal('.popup_engineer', '.header_btn', 2000);
  modal('.popup', '.phone_link');
  forms();
  slider({
    container: '.glazing_slider',
    decorContainer: '.decoration_slider',
    prevArrow: '<button class="prev arrow"></button>',
    nextArrow: '<button class="next arrow"></button>',
  });
});