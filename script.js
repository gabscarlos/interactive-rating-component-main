const ratingButtons = document.querySelectorAll("#rating-card button");
const thankYouCard = document.getElementById("thank-you");
const thankContainer = document.getElementById("container-thanks");
const submitButton = document.getElementById("submit-rating");
const container = document.getElementById("container");

let selectedRating;

ratingButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    selectedRating = button.textContent;    
  });
});

submitButton.addEventListener("click", function() {
  // Aqui envia o valor da classificação selecionada ao back-end
  // ...

  ratingButtons.forEach(function(button) {
    button.style.display = "none";    
  });
  
  container.style.display = "none";
  thankYouCard.textContent = "You selected " + selectedRating + " out of 5";
  thankYouCard.style.display = "block";
  thankContainer.style.display = "block";
  submitButton.style.display = "none";
});
