import { getData } from './api.js'
import { initSlider } from './slider.js'

const onGetDataSuccess = (data) => {
  initSlider(data)
};

const onGetDataError = (error) => {
  console.log(error)
};

export const initImages = () => {
  getData('./data/data.json', onGetDataSuccess, onGetDataError)
}
