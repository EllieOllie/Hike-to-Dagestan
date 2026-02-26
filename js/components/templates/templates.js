const createCard = (data) => {
  const id = data.id
  const name = data.name
  const image = data.image
  return `<figure class="image" data-id="${id}">
            <img class="image__item" src="${image}" alt="${name}">
            <figcaption class="image__description">${name}</figcaption>
          </figure>`
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
  createTableRow
}