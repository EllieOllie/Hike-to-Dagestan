import { getEl, getButtonEl } from './components.js'
import { navigate } from './navigate.js'

export default function route() {

  const appEl = document.getElementById("app")

  const routeSection = getEl(appEl, 'section', 'route-section main__section')
  const routeContainer = getEl(routeSection, 'div', 'container')
  const routeContent = getEl(routeContainer, 'div', 'route-section__content main__section-content')
  const routeTitle = getEl(routeContent, 'h1', 'route-section__title main__section-title', 'Подробный маршрут')
  const routeBtnBack = getButtonEl(routeContent, 'route-section__btn btn btn--filled', 'button', 'Назад на главную страницу')


  routeBtnBack.addEventListener("click", function () {
    // navigate()
    location.reload()
  })

}
