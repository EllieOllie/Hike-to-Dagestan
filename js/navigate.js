// navigate
export async function navigate(pageName) {
  const appEl = document.getElementById("app")

  switch (pageName) {
    case "route":
      appEl.innerHTML = ''
      const routePage = await import('./route.js')
      routePage.default(appEl)
      break

    case "hikes":
      appEl.innerHTML = ''
      const hikesPage = await import('./hikes.js')
      hikesPage.default(appEl)
      break

    default:
      const homePage = await import('./home.js')
      homePage.default(appEl)
  }
}