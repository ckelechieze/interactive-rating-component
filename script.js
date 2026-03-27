const buttons = document.querySelectorAll('.rating-btn');
const submitBtn = document.querySelector(".submit-btn");
const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thank-you");
const ratingValue = document.getElementById("rating-value");

let selectedRating = 0;

//clicking on rating buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        //store selected rating
        selectedRating = button.textContent;
    });
});

//handles submit button click
submitBtn.addEventListener("click", () => {
    if(selectedRating === 0) return //ie do nothing if no rating button is selected
    ratingCard.classList.add('hidden');
    thankYouCard.classList.remove('hidden');

    //insert the selected rating dynamically
    ratingValue.textContent = selectedRating;
})

