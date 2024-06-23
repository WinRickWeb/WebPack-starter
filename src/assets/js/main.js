$(document).ready(function () {
  $(".ttt").click(function () {
    alert('test');
  });
});

import Splide from '@splidejs/splide';

const splideNojavanContent = new Splide('.splide-nojavan-content', {
  direction: 'rtl',
  pagination: false,
  arrows: true,
  loop: 'true',
}).mount();