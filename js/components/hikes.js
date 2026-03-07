import { getEl, getLinkEl } from '../components.js'
import { navigate } from './navigate.js'
import { createTableRow } from './templates/templates.js'

export default function hikes() {

  const appEl = document.getElementById("app")
  const navEl = document.querySelector(".nav")
  const footerLink = document.querySelector("#schedule")

  navEl.style.display = "none"
  footerLink.style.display = "none"

  const hikesSection = getEl(appEl, 'section', 'hikes-section main__section')
  const hikesContainer = getEl(hikesSection, 'div', 'container')
  const hikesContent = getEl(hikesContainer, 'div', 'hikes-section__content main__section-content')
  const hikesTitle = getEl(hikesContent, 'h1', 'hikes-section__title main__section-title', 'Планируем')
  const hikesTable = getEl(hikesContent, 'table', 'hikes-table')
  const hikesTableCaption = getEl(hikesTable, 'caption', 'hikes-table__caption', 'приключения на 2026 год:')
  const hikesTableHead = getEl(hikesTable, 'thead', 'hikes-table__head')
  const hikesTableRow = getEl(hikesTableHead, 'tr', 'hikes-table__row')

  const tableHeads = ['Когда', 'Куда', 'Кол-во дней', 'Тип', 'Описание']
  tableHeads.map(el => {
    getEl(hikesTableRow, 'th', 'hikes-table__th', el)
  })
  const hikesTableBody = getEl(hikesTable, 'tbody', 'hikes-table__body')


  const getData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const createRow = (data) => createTableRow(data)
        data.forEach((item) => {
          const row = createRow(item)
          const rowHtml = getEl(hikesTableBody, 'tr', 'hikes-table__row')
          rowHtml.innerHTML = row
        })
      })
  }

  getData('./data/data-trips.json')


  const hikesLinkBack = getLinkEl(hikesContent, 'hikes-section__link link', 'index.html', 'Назад на главную страницу')

  // hikesLinkBack.addEventListener("click", function () {
  //   navigate('home')
  // })

}
