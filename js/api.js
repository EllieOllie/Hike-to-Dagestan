// export const getData = (url, onGetSuccess, onGetError) => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       onGetSuccess(data);
//     })
//     .catch((error) => {
//       onGetError(error);
//     })
// };

// export const sendData = (url, onSendSuccess, onSendError, body) => {
//   fetch(
//     url,
//     {
//       method: 'POST',
//       body
//     }
//   )
//     .then((response) => {
//       if (response.ok) {
//         onSendSuccess()
//       } else {
//         onSendError();
//       }
//     })
//     .catch(() => {
//       onSendError();
//     })
// };
