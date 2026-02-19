import { navigate } from './navigate.js'
import { btnUpScroll } from './btn-up.js'
import { initAccordion } from './accordion.js';

document.addEventListener('DOMContentLoaded', function () {

  // Запуск приложения
  navigate('home')

  btnUpScroll()

  initAccordion()
})