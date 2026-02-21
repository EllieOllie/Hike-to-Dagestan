export const createCard = (data) => {
  const id = data.id
  const name = data.name
  const image = data.image
  return `<figure class="image" data-id="${id}">
            <img class="image__item" src="${image}" alt="${name}">
            <figcaption class="image__description">${name}</figcaption>
          </figure>`
}