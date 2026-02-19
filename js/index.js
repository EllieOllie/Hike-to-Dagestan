import { navigate } from './navigate.js'
import { btnUpScroll } from './btn-up.js'

document.addEventListener('DOMContentLoaded', function () {
  // Запуск приложения
  navigate('home')

  btnUpScroll()
})