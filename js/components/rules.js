import { getEl, getLinkEl } from '../components.js'
import { navigate } from './navigate.js'

export default function rules() {

  const appEl = document.getElementById("app")
  const navEl = document.querySelector(".nav")
  const footerLink = document.querySelector("#rules")

  navEl.style.display = "none"
  footerLink.style.display = "none"


  const rulesSection = getEl(appEl, 'section', 'rules-section main__section')
  const rulesContainer = getEl(rulesSection, 'div', 'container')
  const rulesContent = getEl(rulesContainer, 'div', 'rules-section__content main__section-content')

  const rulesTitle = getEl(rulesContent, 'h2', 'rules-section__title main__section-title', 'Особенности и правила поведения на тропе')

  const rulesList = getEl(rulesContent, 'ol', 'rules-section__list')

  const rulesArray = [
    'Уносить весь свой мусор с собой. Ничего и никогда не бросайте на тропу / в кусты / в лесу на всем протяжении маршрута. Cалфетки и туалетную бумагу следует складывать в пакетик и уносить с собой. Для "больших дел" в поход стоит взять совочек, отойти на 50-70 метров от тропы, вырыть ямку и затем её хорошенько закопать.',
    'В Дагестане существует дресс-код: закрытая одежда как для мужчин, так и для женщин. Это значит - покрытые плечи, покрытые колени, свободная одежда. Девушкам рекомендуется носить платок или бандану.',
    'Запрещено употреблять алкоголь как на тропе, так и в селах по пути. Курение в присутствии местных жителей также не допускается.',
    'Женщинам наедине с мужчинами не оставаться и первой не заговаривать.',
    'На тропе не везде можно расплатиться картой или переводом с карты. Лучше с собой брать какой-то запас наличных средств.'
  ]

  rulesArray.map(el => {
    const rulesListItem = getEl(rulesList, 'li', 'rules-section__list-item')
    const rulesText = getEl(rulesListItem, 'p', 'rules-section__text main__section-text', `${el}`)
    rulesListItem.append(rulesText)
  })


  const rulesLinkBack = getLinkEl(rulesContent, 'rules-section__link link', 'index.html', 'Назад на главную страницу')

  rulesLinkBack.addEventListener("click", function () {
    navigate('home')
  })

}
