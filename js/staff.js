import { getEl, getButtonEl } from './components.js'
import { navigate } from './navigate.js'

export default function staff() {

  const appEl = document.getElementById("app")

  const staffSection = getEl(appEl, 'section', 'staff-section main__section')
  const staffContainer = getEl(staffSection, 'div', 'container')
  const staffContent = getEl(staffContainer, 'div', 'staff-section__content main__section-content')
  const staffTitle = getEl(staffContent, 'h1', 'staff-section__title main__section-title', 'Полный список снаряжения')
  const staffBtnBack = getButtonEl(staffContent, 'staff-section__btn btn btn--filled', 'button', 'Назад на главную страницу')


  staffBtnBack.addEventListener("click", function () {
    // navigate()
    location.reload()
  })

}
