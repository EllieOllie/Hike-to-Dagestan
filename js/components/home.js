import { navigate } from './navigate.js'

export default function home() {


  // const appEl = document.getElementById("app")
  // const homePage = appEl.innerHTML


  const routeBtn = document.body.querySelector('.route__btn')
  const hikesBtn = document.body.querySelector('#schedule')

  routeBtn.addEventListener("click", function () {
    navigate("route")
  })

  hikesBtn.addEventListener("click", function () {
    navigate("hikes")
  })

}
