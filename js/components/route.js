import { getEl, getLinkEl, getImgEl } from '../components.js'
import { navigate } from './navigate.js'
import { createRouteCard } from './templates/templates.js'

export default function route() {

  const appEl = document.getElementById("app")
  const navEl = document.querySelector(".nav")

  navEl.style.display = "none"

  const routeSection = getEl(appEl, 'section', 'route-section main__section')
  const routeContainer = getEl(routeSection, 'div', 'container')
  const routeContent = getEl(routeContainer, 'div', 'route-section__content main__section-content')

  const routeTextBefore = getEl(routeContent, 'p', 'route-section__text main__section-text', 'Встречаемся в Дербенте, погуляем, отдохнем и на следующи день отправимся в горы в с. Кубачи, где переночуем, чтобы акклиматизироваться и на следующий день выйти на маршрут.')

  const routeTextWarning = getEl(routeContent, 'p', 'route-section__text route-section__text--warning main__section-text', 'Важно! Маршрут корректируется в процессе прохождения тропы, ориентируясь на погоду, стихийные природные явления и самочувствие всех участников похода. Ниже - только план, а по факту, маршрут может быть измерен, могут быть заменены, дополнены, либо исключены некоторые точки.')


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



  const routeTextAfter = getEl(routeContent, 'p', 'route-section__text route-section__text--white main__section-text', 'По пути в Махачкалу можно заехать в село Нижнее Чугли, чтобы посетить уникальный палеонтологический музей, собранный из местных находок. На фото пример экспоната - Ихтиозавр "Чурчума". В такой сохранности нет ни в одном музее мира!')

  const routeImgAfter = getImgEl(routeContent, 'route-section__image', 'images/images/chugli.jpg', 'Палеонтологический музей в селе Нижнее Чугли')

  const routeLinkBack = getLinkEl(routeContent, 'route-section__link link', 'index.html', 'Назад на главную страницу')

  routeLinkBack.addEventListener("click", function () {
    navigate('home')
  })

}
