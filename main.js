
const leftButtons = document.querySelectorAll(`.left .currency button`);
const rightButtons = document.querySelectorAll(`.right .currency button`);

let leftInput = document.querySelector(`.left input`);
let rightInput = document.querySelector(`.right input`);

let leftP = document.querySelector(`.left .second`);
let rightP = document.querySelector(`.right .second`);

leftButtons.forEach((leftButton) => {
  leftButton.addEventListener(`click`, (e) => {
    leftButtons.forEach((leftButtonColor) => {
      leftButtonColor.style.backgroundColor = `white`;
    });
    e.target.style.backgroundColor = `purple`;
    console.log(e.target.innerText);
    fetch(
      `https://v6.exchangerate-api.com/v6/61fef6cd54c94b993b05b36c/latest/${e.target.innerText}`
    )
      .then((response) => response.json())
      .then((data) => {
        rightButtons.forEach((rightButton) => {
          rightButton.addEventListener(`click`, (e2) => {
            rightButtons.forEach((rightButtonColor) => {
              rightButtonColor.style.backgroundColor = "white";
            });
            e2.target.style.backgroundColor = `purple`;
            leftInput.addEventListener(`input`, () => {
              rightInput.value =
                leftInput.value * data.conversion_rates[e2.target.innerText];
            });
            rightInput.value =
              leftInput.value * data.conversion_rates[e2.target.innerText];
            leftP.innerText = `1 ${e.target.innerText} = ${
              data.conversion_rates[e2.target.innerText]
            } ${e2.target.innerText} `;
            rightP.innerText = `1 ${e2.target.innerText} = ${1/
              data.conversion_rates[e2.target.innerText]
            } ${e.target.innerText} `;
          });
        });
      });
  });
});



// rightButtons.forEach((rightButton) => {
//   rightButton.addEventListener(`click`, (e) => {
//     rightButtons.forEach((rightButtonColor) => {
//       rightButtonColor.style.backgroundColor = `white`;
//     });
//     e.target.style.backgroundColor = `purple`;
//     console.log(e.target.innerText);
//     fetch(
//       `https://v6.exchangerate-api.com/v6/61fef6cd54c94b993b05b36c/latest/${e.target.innerText}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         leftButtons.forEach((leftButton) => {
//           leftButton.addEventListener(`click`, (e2) => {
//             leftButtons.forEach((leftButtonColor) => {
//               leftButtonColor.style.backgroundColor = "white";
//             });
//             e2.target.style.backgroundColor = `purple`;
//             rightInput.addEventListener(`input`, () => {
//               leftInput.value =
//                 rightInput.value * data.conversion_rates[e2.target.innerText];
//             });
//             leftInput.value =
//               rightInput.value * data.conversion_rates[e2.target.innerText];
//             leftP.innerText = `1 ${e2.target.innerText} = ${
//               data.conversion_rates[e2.target.innerText]
//             } ${e.target.innerText} `;
//             rightP.innerText = `1 ${e.target.innerText} = ${
//               data.conversion_rates[e2.target.innerText]
//             } ${e2.target.innerText} `;
//           });
//         });
//       });
//   });
// });