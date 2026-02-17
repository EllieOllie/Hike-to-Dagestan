// Получение любого элемента
function getEl(parentEl, teg = '', className = '', text = '') {
  const el = document.createElement(teg);
  el.setAttribute('class', className)
  el.textContent = text;
  parentEl.append(el);
  return el
}

// Получение элемента кнопки
function getButtonEl(parentEl, className = '', type = '', text = '') {
  const buttonEl = document.createElement('button')
  buttonEl.setAttribute('class', className)
  buttonEl.type = type
  buttonEl.textContent = text;
  parentEl.append(buttonEl);
  return buttonEl
}

export {
  getEl,
  getButtonEl,
}