export const getData = (url, onGetSuccess, onGetError) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      onGetSuccess(data);
    })
    .catch((error) => {
      onGetError(error);
    })
};
