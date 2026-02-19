import { getEl, getLinkEl } from './components.js'
import { navigate } from './navigate.js'

export default function hikes() {

  const appEl = document.getElementById("app")
  const navEl = document.querySelector(".nav")

  navEl.style.display = "none"

  const hikesSection = getEl(appEl, 'section', 'hikes-section main__section')
  const hikesContainer = getEl(hikesSection, 'div', 'container')
  const hikesContent = getEl(hikesContainer, 'div', 'hikes-section__content main__section-content')
  const hikesTitle = getEl(hikesContent, 'h1', 'hikes-section__title main__section-title', 'Еще планируем приключения...')
  const hikesLinkBack = getLinkEl(hikesContent, 'hikes-section__link', 'index.html', 'Назад на главную страницу')


  hikesLinkBack.addEventListener("click", function () {
    navigate('home')
  })

}
