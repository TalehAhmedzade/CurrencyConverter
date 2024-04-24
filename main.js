const leftInput = document.querySelectorAll(`.left input`);
const leftButtons = document.querySelectorAll(`.currency button`);
const leftRub = document.querySelector(`.currency .rub`);
const leftUsd = document.querySelector(`.currency .usd`);
const leftEur = document.querySelector(`.currency .eur`);
const leftGbp = document.querySelector(`.currency .gbp`);

leftButtons.forEach((button)=>{
    button.addEventListener(`click`,(e)=>{
    e.target.style.backgroundColor = "purple";
    })
})

leftRub.addEventListener(`click`,(e)=>{
    leftRub.style.backgroundColor = "purple";
    leftRub.style.color = "white";
    fetch(`https://v6.exchangerate-api.com/v6/61fef6cd54c94b993b05b36c/latest/RUB`).then(response=>response.json()).then(data=>{
    console.log(data);
})
    e.preventDefault();
})