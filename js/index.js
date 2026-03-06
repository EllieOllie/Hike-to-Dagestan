import { navigate } from './components/navigate.js'
import { btnUpScroll } from './components/btn-up.js'
import { initImages } from './components/image-gallery.js';
import { initAccordion } from './components/accordion.js';

document.addEventListener('DOMContentLoaded', function () {

  const footerLink = document.querySelector("#rules")
  footerLink.style.display = "none"


  // Запуск приложения
  navigate('home')
  initAccordion()
  btnUpScroll()
  initImages()
})