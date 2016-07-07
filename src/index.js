import './style.scss';
import $ from 'jquery';

let count = 0;

setInterval(() => {
  $('#main').html(`You\'ve been on this page for ${count} seconds.`);
  count++;
}, 1000);
