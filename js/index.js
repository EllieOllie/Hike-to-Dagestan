import { navigate } from './navigate.js'
import { btnUpScroll } from './btn-up.js'
import { initImages } from './image-gallery.js';
import { initAccordion } from './accordion.js';

document.addEventListener('DOMContentLoaded', function () {

  // Запуск приложения
  navigate('home')

  btnUpScroll()
  initImages()
  initAccordion()
})