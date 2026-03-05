const createCard = (data) => {
  const id = data.id
  const name = data.name
  const image = data.image
  return `<figure class="image" data-id="${id}">
            <img class="image__item" src="${image}" alt="${name}">
            <figcaption class="image__description">${name}</figcaption>
          </figure>`
}

// const createAccordionElement = (data) => {
//   const id = data.id
//   const name = data.name
//   const list = data.list

//   return `<div class="accordion__element" data-id="${id}">
//   <button class="accordion__btn btn" type="button" aria-label="Развернуть список">
//     <span class="accordion__btn-text">${name}</span>
//     <span class="accordion__btn-icon"></span>
//   </button>
//   <div class="accordion__content">
//     <div class="accordion__inner">

//       <ol class="staff__list"></ol>

//     </div>
//   </div>
// </div>`
// }

const createRouteCard = (data) => {
  const id = data.id
  const day = data.day
  const image = data.image
  const description = data.description
  const distance = data.distance
  const climb = data.climb
  const sleep = data.sleep
  const text = data.text
  return `<div class="route-card data-id="${id}">
            <div class="route-card__content">
              <h2 class="route-card__title main__section-text-title">${day} день похода</h2>
              <p class="route-card__description main__section-text">${text}</p>
              <div class="route-card__summary">
                <span class="route-card__distance">Расстояние <b>${distance}</b>&nbsp;км</span>
                <img class="route-card__sleep" src="${sleep}" alt="ночевка" width="60"
            height="60">
                <span class="route-card__climb">Набор высоты <b>${climb}</b>&nbsp;м</span>
              </div>
            </div>
            <figure class="route-card__image">
              <img src="${image}" alt="${description}" class="route-card__img">
              <figcaption class="route-card__img-caption">${description}</figcaption>
            </figure>
          </div>`
}

const createTableRow = (data) => {
  const id = data.id
  const name = data.name
  const date = data.date
  const days = data.days
  const type = data.type
  const description = data.description
  return `<tr class="hikes-table__row" data-id="${id}">
            <td class="hikes-table__td">${date}</td>
            <td class="hikes-table__td">${name}</td>
            <td class="hikes-table__td">${days}</td>
            <td class="hikes-table__td">${type}</td>
            <td class="hikes-table__td">${description}</td>
          </tr>`
}


export {
  createCard,
  createRouteCard,
  createTableRow
}