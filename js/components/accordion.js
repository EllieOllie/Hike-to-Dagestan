import { getEl } from '../components.js'


export const initAccordion = () => {
  const accordions = document.querySelectorAll(".accordion__content")
  accordions.forEach(accordion => {
    const staffList = getEl(accordion, 'ol', 'staff__list')

    const getData = (url) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {

          for (const item of data) {
            const obj = accordion.dataset

            if (item.id == obj.id) {
              const list = item.list
              list.map(el => {
                const staffListItem = getEl(staffList, 'li', 'staff__list-item')
                staffListItem.innerHTML = el
              })
            }
          }
        })
    }

    getData('./data/data-staff.json')
  })

}


