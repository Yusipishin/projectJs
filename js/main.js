require('es6-promise').polyfill();
import 'polyfill-nodelist-foreach';

import modal from './modules/modal';
import slider from './modules/slider';
import forms from './modules/forms';
import tabs from './modules/tabs'

window.addEventListener('DOMContentLoaded', () => {
  modal('.popup_engineer', '.header_btn', 10000);
  modal('.popup', '.phone_link');
  forms();
  tabs('.glazing_block', '.glazing_content', '.glazing_block a' , 'active');
  tabs('.decoration_item', '[data-content="service"]', '.decoration_item div', 'after_click')
  slider({
    container: '.glazing_slider',
    decorContainer: '.decoration_slider',
    prevArrow: '<button class="prev arrow"></button>',
    nextArrow: '<button class="next arrow"></button>',
  });
});