import { getEl } from '../components.js'

export const initTourinfo = () => {
  const tourInfoWrapper = document.querySelector(".tour-info__lists")

  const createTourInfoContent = (text, list) => {
    const tourInfoText = getEl(tourInfoWrapper, 'p', 'tour-info__text main__section-text')
    const tourInfoTextStrong = getEl(tourInfoText, 'strong', 'tour-info__text--strong', text)
    const tourInfoList = getEl(tourInfoWrapper, 'ul', 'tour-info__list')

    list.map(el => {
      const tourInfoItem = getEl(tourInfoList, 'li', 'tour-info__list-item')
      const tourInfoItemText = getEl(tourInfoItem, 'p', 'tour-info__text main__section-text')
      tourInfoItemText.innerHTML = el
    })
  }

  const getData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {

        for (const item of data) {
          if (item.status === "included") {
            createTourInfoContent(item.text, item.list)
          } else if (item.status === "not included") {
            createTourInfoContent(item.text, item.list)
          }
        }
      })
  }

  getData('./data/data-info.json')
}


