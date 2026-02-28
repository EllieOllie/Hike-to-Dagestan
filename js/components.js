// Получение любого элемента
function getEl(parentEl, teg = '', className = '', text = '') {
  const el = document.createElement(teg);
  el.setAttribute('class', className)
  el.textContent = text
  parentEl.append(el)
  return el
}

// Получение элемента кнопки
function getButtonEl(parentEl, className = '', type = '', text = '') {
  const buttonEl = document.createElement('button')
  buttonEl.setAttribute('class', className)
  buttonEl.type = type
  buttonEl.textContent = text
  parentEl.append(buttonEl)
  return buttonEl
}

// Получение элемента ссылки
function getLinkEl(parentEl, className = '', href = '', text = '') {
  const linkEl = document.createElement('a')
  linkEl.setAttribute('class', className)
  linkEl.href = href
  linkEl.textContent = text
  parentEl.append(linkEl)
  return linkEl
}

// Получение элемента изображения
function getImgEl(parentEl, className = '', src = '', alt = '') {
  const imgEl = document.createElement('img')
  imgEl.setAttribute('class', className)
  imgEl.src = src
  imgEl.alt = alt
  parentEl.append(imgEl)
  return imgEl
}

export {
  getEl,
  getButtonEl,
  getLinkEl,
  getImgEl
}