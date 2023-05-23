// Get a reference to the card element
const card = document.querySelector('.card');

// Add a click event listener to the card
card.addEventListener('click', function() {
  // Toggle the 'flipped' class to flip the card
  card.classList.toggle('flipped');
});
