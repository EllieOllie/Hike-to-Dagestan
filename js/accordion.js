const accordionButtons = document.querySelectorAll('.accordion__btn');

const onAccordionBtnClick = (evt) => {
  evt.preventDefault();
  const activeAccordion = document.querySelector('.accordion__btn--active');
  if (activeAccordion && activeAccordion !== evt.target) {
    activeAccordion.classList.remove('accordion__btn--active');
  }
  evt.target.classList.toggle('accordion__btn--active');
};

export const initAccordion = () => {
  accordionButtons.forEach((button) => {
    button.addEventListener('click', onAccordionBtnClick);
  });
};
