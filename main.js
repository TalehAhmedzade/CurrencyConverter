const leftButtons = document.querySelectorAll(`.left .currency button`);
const rightButtons = document.querySelectorAll(`.right .currency button`);

let leftInput = document.querySelector(`.left input`);
let rightInput = document.querySelector(`.right input`);

let leftP = document.querySelector(`.left .second`);
let rightP = document.querySelector(`.right .second`);

let defaultRightInput = document.querySelector(`.right input`);
let defaultUsd = document.querySelector(`.right .usd`);
fetch(`https://v6.exchangerate-api.com/v6/61fef6cd54c94b993b05b36c/latest/RUB`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Something went wrong");
  })
  .then((data) => {
    defaultRightInput.value = Number.parseFloat(
      100 * data.conversion_rates.USD
    ).toFixed(4);
    leftP.innerText = `1 RUB = ${Number.parseFloat(
      data.conversion_rates.USD
    ).toFixed(4)} USD `;
    rightP.innerText = `1 USD = ${Number.parseFloat(
      1 / data.conversion_rates.USD
    ).toFixed(4)} RUB`;
    leftButtons.forEach((leftButton) => {
      leftButton.addEventListener(`click`, (e) => {
        rightButtons.forEach((rightButton) => {
          rightButton.addEventListener(`click`, (e2) => {
            //sertde problem var
            if (e.target.value === e2.target.value) {
              leftInput.addEventListener(`input`, () => {
                rightInput.value = leftInput.value;
              });
              rightInput.value = leftInput.value;
            } else {
              leftInput.addEventListener(`input`, () => {
                rightInput.value = Number.parseFloat(
                  leftInput.value * data.conversion_rates[e2.target.innerText]
                ).toFixed(4);
              });
              rightInput.value = Number.parseFloat(
                leftInput.value * data.conversion_rates[e2.target.innerText]
              ).toFixed(4);
            }
            leftP.innerText = `1 ${e.target.innerText} = ${Number.parseFloat(
              data.conversion_rates[e2.target.innerText]
            ).toFixed(4)} ${e2.target.innerText} `;
            rightP.innerText = `1 ${e2.target.innerText} = ${Number.parseFloat(
              1 / data.conversion_rates[e2.target.innerText]
            ).toFixed(4)} ${e.target.innerText} `;

            //sagda dyisikliki isleyir soldaki ise yox sol buttonlara kliklendikde buttona uygun sag da deyismelidi
            leftButtons.forEach((leftButton) => {
              leftButton.addEventListener(`click`, (e) => {
                console.log(e.target);
                console.log(e2.target);
                rightInput.value =
                  leftInput.value * data.conversion_rates[e2.target.innerText];
              });
            });
          });
        });
      });
    });
  })
  .catch((error) => {
    const body = document.querySelector(`body`);
    body.innerHTML = ``;
    alert(`${error}
    nese problem var sorguda`);
  });

//renglenme hissesi ///////

leftButtons.forEach((leftButton) => {
  leftButton.addEventListener(`click`, (e) => {
    leftButtons.forEach((leftButtonColor) => {
      leftButtonColor.style.backgroundColor = `white`;
    });
    e.target.style.backgroundColor = `purple`;
  });
});

rightButtons.forEach((rightButton) => {
  rightButton.addEventListener(`click`, (e2) => {
    rightButtons.forEach((rightButtonColor) => {
      rightButtonColor.style.backgroundColor = "white";
    });
    e2.target.style.backgroundColor = `purple`;
  });
});

//esas  emaliyyatlarin yerine yetirilme hissesi
//soldan bir duymeye clickledik.Sora sagdan, sora yeniden solda kliklenende sagdaki input soldaki duymenin yolladigi input deyerin cevirmelidi
// leftButtons.forEach((leftButton) => {
//   leftButton.addEventListener(
//     `click`,
//     (e) => {
//       console.log(`1ci eventi solun`);
//       fetch(
//         `https://v6.exchangerate-api.com/v6/61fef6cd54c94b993b05b36c/latest/${e.target.innerText}`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           rightButtons.forEach((rightButton) => {
//             rightButton.addEventListener(`click`, (e2) => {
//               leftInput.addEventListener(`input`, () => {
//                 rightInput.value =
//                   leftInput.value * data.conversion_rates[e2.target.innerText];
//               });
//               rightInput.value =
//                 leftInput.value * data.conversion_rates[e2.target.innerText];

//               leftP.innerText = `1 ${e.target.innerText} = ${
//                 data.conversion_rates[e2.target.innerText]
//               } ${e2.target.innerText} `;
//               rightP.innerText = `1 ${e2.target.innerText} = ${
//                 1 / data.conversion_rates[e2.target.innerText]
//               } ${e.target.innerText} `;

//               //sagda dyisikliki isleyir soldaki ise yox sol buttonlara kliklendikde buttona uygun sag da deyismelidi
//               leftButtons.forEach((leftButton) => {
//                 leftButton.addEventListener(`click`, (e) => {
//                   console.log(e.target);
//                   console.log(e2.target);
//                   rightInput.value =
//                     leftInput.value *
//                     data.conversion_rates[e2.target.innerText];
//                 });
//               });
//             });
//           });
//         });
//     },
//     { once: true }
//   );
// });

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
