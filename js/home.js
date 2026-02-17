import { navigate } from './navigate.js'

export default function home() {

  const appEl = document.getElementById("app")
  const homePage = appEl.innerHTML


  const staffBtn = document.body.querySelector('.staff__btn')
  const routeBtn = document.body.querySelector('.route__btn')

  staffBtn.addEventListener("click", function () {
    navigate("staff")
  })

  routeBtn.addEventListener("click", function () {
    navigate("route")
  })

}
