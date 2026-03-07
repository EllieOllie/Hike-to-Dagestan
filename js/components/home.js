import { navigate } from './navigate.js'

export default function home() {

  const routeBtn = document.body.querySelector('.route__btn')
  routeBtn.addEventListener("click", function () {
    navigate("route")
  })

  const hikesBtn = document.body.querySelector('#schedule')
  hikesBtn.addEventListener("click", function () {
    navigate("hikes")
  })

}
