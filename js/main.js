const buttons = document.querySelectorAll(".rateNum");
const submit = document.querySelector(".submitBtn");
const rating = document.querySelector(".userInput");
const card = document.querySelector(".ratingCard");
const thankYou = document.querySelector(".thankYouCard");

let value;

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        buttons.forEach((button) => button.classList.remove("active")); 
        e.target.classList.add("active");
        value = e.target.textContent;
    });
});

submit.addEventListener("click", () => {
    rating.textContent = value;
    card.style.display = "none";
    thankYou.style.display = "flex";
});





