import { getEl } from '../components.js'
import { createCard } from './templates/templates.js';

const imagesNavigation = document.querySelector('.images__navigation');
const imagesSlider = document.querySelector('.images__slider');
const imagesList = document.querySelector('.images__list');

const createSlide = (data) => {
  const cardParent = document.querySelector('.swiper-wrapper')
  const card = getEl(cardParent, 'li', 'images__list-item swiper-slide')
  card.innerHTML = createCard(data)
  return card
};

const createSlider = () => {
  return new Swiper(imagesSlider, {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 40
      },
    },
    navigation: {
      prevEl: '.images__btn--prev',
      nextEl: '.images__btn--next',
    },
    mousewheel: {
      sensivity: 1,
    },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: true,
    // },
    speed: 1000,
    loop: false,
    a11y: false,
    keyboard: true,
  })
}

export const initSlider = (data) => {
  const sliderData = data

  sliderData.forEach((item) => {
    const slide = createSlide(item)
    imagesList.append(slide)
  })

  if (sliderData.length <= 2) {
    imagesNavigation.remove()
  }

  if (sliderData.length > 2) {
    createSlider()
  }
}



