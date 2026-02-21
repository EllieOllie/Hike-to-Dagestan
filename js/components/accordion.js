const accordions = document.querySelectorAll(".accordion__element");

const onAccordionBtnClick = (e) => {
  const self = e.currentTarget

  const btn = self.querySelector(".accordion__btn");
  const content = self.querySelector(".accordion__content");

  btn.classList.toggle("accordion__btn--active");
  // const activeAccordion = self.querySelector('.accordion__btn--active')

  //сделать спомощью summary/details плавно и чтобы одна вкладка открыта, все остальные были закрыты.

  if (btn.classList.contains("accordion__btn--active")) {
    btn.setAttribute("aria-expanded", true);
    content.setAttribute("aria-hidden", false);
    content.style.maxHeight = content.scrollHeight + "px";
  } else {
    btn.setAttribute("aria-expanded", false);
    content.setAttribute("aria-hidden", true);
    content.style.maxHeight = null;
  }
}

export const initAccordion = () => {
  accordions.forEach((el) => {
    el.addEventListener('click', onAccordionBtnClick)
  })
}
