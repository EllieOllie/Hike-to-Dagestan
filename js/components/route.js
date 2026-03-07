import { getEl, getLinkEl, getImgEl } from '../components.js'
import { navigate } from './navigate.js'
import { createRouteCard } from './templates/templates.js'

export default function route() {

  const appEl = document.getElementById("app")
  const navEl = document.querySelector(".nav")

  const footerLinkSchedule = document.querySelector("#schedule")
  const footerLinkRules = document.querySelector("#rules")
  navEl.style.display = "none"
  footerLinkSchedule.style.display = "none"
  footerLinkRules.style.display = "flex"

  const routeSection = getEl(appEl, 'section', 'route-section main__section')
  const routeContainer = getEl(routeSection, 'div', 'container')
  const routeContent = getEl(routeContainer, 'div', 'route-section__content main__section-content')

  const routeTextBefore = getEl(routeContent, 'p', 'route-section__text main__section-text', 'На поездку нужно заложить 11 дней от дня прилета до дня вылета включительно. Встречаемся в Махачкале.')

  const routeTextWarning = getEl(routeContent, 'p', 'route-section__text route-section__text--warning main__section-text', 'Важно! Маршрут корректируется в процессе прохождения тропы, ориентируясь на погоду, стихийные природные явления и самочувствие всех участников похода. Ниже - только план, а по факту могут быть заменены, дополнены, либо исключены некоторые участки маршрута.')


  const routeTitle = getEl(routeContent, 'h2', 'route-section__title main__section-title', 'Подробный маршрут треккинга')
  const routeList = getEl(routeContent, 'ul', 'route-section__list')


  const getData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const createCard = (data) => createRouteCard(data)
        data.forEach((item) => {
          const listEl = getEl(routeList, 'li', 'route-section__list-item')
          const card = createCard(item)
          listEl.innerHTML = card
        })
      })
  }

  getData('./data/data-days.json')

  const routeTextAfter = getEl(routeContent, 'p', 'route-section__text route-section__text--white main__section-text', 'В наш маршрут заложен 1 резервный день на случай непогоды, либо других непредвиденных обстоятельств. Этот день мы сможем провести, например, в Гунибе, исследуя его окрестности с многочисленными достопримечательностями.')

  const routeFigure = getEl(routeContent, 'figure', 'route-section__figure')
  const routeFigureImg = getImgEl(routeFigure, 'route-section__image', 'images/images/chugli.jpg', 'Палеонтологический музей в селе Нижнее Чугли')
  const routeFigcaption = getEl(routeFigure, 'figcaption', 'route-section__description', 'По пути в Махачкалу на обратном пути мы заедем в село Нижнее Чугли, чтобы посетить уникальный палеонтологический музей, собранный из местных находок. На фото пример экспоната - Ихтиозавр "Чурчума". В такой сохранности нет ни в одном музее мира!')

  const rulesBtn = document.body.querySelector('#rules')
  rulesBtn.addEventListener("click", function () {
    navigate("rules")
  })

  const routeLinkBack = getLinkEl(routeContent, 'route-section__link link', 'index.html', 'Назад на главную страницу')

  // routeLinkBack.addEventListener("click", function () {
  //   navigate()
  // })

}
