import { navigate } from './components/navigate.js'
import { btnUpScroll } from './components/btn-up.js'
import { initImages } from './components/image-gallery.js';
import { initAccordion } from './components/accordion.js';

document.addEventListener('DOMContentLoaded', function () {

  // Запуск приложения
  navigate('home')

  btnUpScroll()
  initImages()
  initAccordion()
})