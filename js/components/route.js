import { getEl, getLinkEl } from '../components.js'
import { navigate } from './navigate.js'

export default function route() {

  const appEl = document.getElementById("app")
  const navEl = document.querySelector(".nav")

  navEl.style.display = "none"

  const routeSection = getEl(appEl, 'section', 'route-section main__section')
  const routeContainer = getEl(routeSection, 'div', 'container')
  const routeContent = getEl(routeContainer, 'div', 'route-section__content main__section-content')
  const routeTitle = getEl(routeContent, 'h1', 'route-section__title main__section-title', 'Подробный маршрут')
  const routeLinkBack = getLinkEl(routeContent, 'route-section__link', 'index.html', 'Назад на главную страницу')


  routeLinkBack.addEventListener("click", function () {
    navigate('home')
  })

}
