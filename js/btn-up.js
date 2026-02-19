export function btnUpScroll() {

  const scrollTopBtn = document.querySelector('#scroll-top')

  function scrollToTop() {
    window.scrollTo(0, 0)
  }

  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.classList.add('btn--visible')
    } else {
      scrollTopBtn.classList.remove('btn--visible')
    }
  };

  scrollTopBtn.addEventListener('click', scrollToTop)
}

