const modalBtn = document.querySelector('.exotic-title');
const closeModalBtn = document.querySelector('.modal-close-btn');
const modal = document.querySelector('.modal-background');

modalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = "none";
})
