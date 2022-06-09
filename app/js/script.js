const num = document.querySelector(".num");
const adv = document.querySelector(".advice");
const btn = document.querySelector(".btn");

const getQuote = () => {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(quo => {
            num.textContent = quo.slip.id
            adv.textContent = `“${quo.slip.advice}”`;
        })
    }

window.addEventListener("load", getQuote)
btn.addEventListener("click", getQuote)