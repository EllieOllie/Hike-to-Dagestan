import { getEl, getLinkEl } from './components.js'
import { navigate } from './navigate.js'
// import { createStaffPage } from '../templates/staff-page.js';
import data from '../data/dataStaff.js';

export default function staff() {
  console.log(data);

  const appEl = document.getElementById("app")
  const navEl = document.querySelector(".nav")

  navEl.style.display = "none"

  const staffSection = getEl(appEl, 'section', 'staff-section main__section')
  const staffContainer = getEl(staffSection, 'div', 'container')
  const staffContent = getEl(staffContainer, 'div', 'staff-section__content main__section-content')
  const staffTitle = getEl(staffContent, 'h1', 'staff-section__title main__section-title', 'Полный список снаряжения')
  const staffLinkBack = getLinkEl(staffContent, 'staff-section__link', 'index.html', 'Назад на главную страницу')


  // const createStaffPage = (data) => {
  //   console.log(data);
  //   const id = data.id;
  //   const name = data.name;
  //   const list = data.list;

  //   const listItem = () => {
  //     list.map(item => {
  //       const list = document.querySelector('staff__list')
  //       const listItem = getEl(list, 'li', 'staff__list-item', item)
  //     })
  //   }


  //   return `<div class="staff__box" data-id="${id}">
  //                 <strong class="staff__name">${name}</strong>
  //                 <ol class="staff__list">
  //                 ${listItem()}
  //                 </ol>
  //               </div>`;
  // }

  // const createStaffItem = (data) => {
  //   const li = document.createElement('li');
  //   li.classList.add('staff__list-item');
  //   li.innerHTML = createCard(data);
  //   return li;
  // };

  // const renderStafflist = (data) => {
  //   catalogList.innerHTML = '';
  //   data.slice(start, stop).forEach((item) => {
  //     const card = createCatalogCard(item);
  //     catalogList.append(card);
  //   });
  // };

  // createStaffPage()

  staffLinkBack.addEventListener("click", function () {
    // location.href = 'index.html'
    navigate('home')
  })

}
