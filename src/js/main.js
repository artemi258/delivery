import slider from './modules/slider';
import forms from './modules/form';
import scrolling from './modules/scrolling';
import gamburger from './modules/gamburger';
import up from './modules/up';
import {WOW} from 'wowjs';

const wow = new WOW({
  boxClass: 'wow', // animated element css class (default is wow)
  animateClass: 'animated', // animation css class (default is animated)
  offset: 150, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();


window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  slider();
  forms();
  scrolling();
  gamburger();
  up();

});