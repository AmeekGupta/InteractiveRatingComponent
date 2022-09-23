const mainContainer = document.querySelector(".container");
const thankYouContainer = document.querySelector(".thank-you");
const btnSubmit = document.getElementById("btn-submit");
const btnRateAgain = document.getElementById("btn-rate-again");
const rating = document.getElementById("rating");
const ratingButtons = document.querySelectorAll(".rate");

btnSubmit.addEventListener("click", () => {
    thankYouContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
});

btnRateAgain.addEventListener("click", () => {
    thankYouContainer.classList.add("hidden");
    mainContainer.style.display = "block";
});

ratingButtons.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    });
});