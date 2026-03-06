import { navigate } from './navigate.js'

export default function home() {


  // const appEl = document.getElementById("app")
  // const homePage = appEl.innerHTML


  const routeBtn = document.body.querySelector('.route__btn')
  routeBtn.addEventListener("click", function () {
    navigate("route")
  })

  const hikesBtn = document.body.querySelector('#schedule')
  hikesBtn.addEventListener("click", function () {
    navigate("hikes")
  })

  const rulesBtn = document.body.querySelector('#rules')
  rulesBtn.addEventListener("click", function () {
    navigate("rules")
  })

}
