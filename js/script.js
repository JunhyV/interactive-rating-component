const mainContainer = document.getElementById('main');
const hiddenContainer = document.getElementById('hidden');
const submitButton = document.getElementById('submit');
const rating = document.getElementById('rating');
const ratingNumber = document.querySelectorAll('.btn');

submitButton.addEventListener('click', () => {
    hiddenContainer.classList.remove("hidden");
    mainContainer.style.display = 'none';
})

ratingNumber.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        rating.innerHTML = numberButton.innerHTML
    })
})