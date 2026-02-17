import { getEl } from './components.js'

// navigate
export async function navigate(pageName) {
  const appEl = document.getElementById("app")
  // appEl.innerHTML = ''

  const loaderEl = getEl(appEl, 'div', 'loader')

  switch (pageName) {
    case "route":
      appEl.innerHTML = ''
      const routePage = await import('./route.js')
      routePage.default(appEl)
      loaderEl.remove()
      break
    case "staff":
      appEl.innerHTML = ''
      const staffPage = await import('./staff.js')
      staffPage.default(appEl)
      loaderEl.remove()
      break
    default:
      // appEl.innerHTML = ''
      const homePage = await import('./home.js')
      homePage.default(appEl)
      // const homePage = appEl.innerHTML
      // location.reload()
      loaderEl.remove()
  }
}