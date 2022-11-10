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


function radioChecked() {
  const radio = document.querySelectorAll(".controls-radio input");
  const sliderQuaranty = document.querySelector(".slider-quaranty");

  radio.forEach(item => {
    item.classList.remove(".active-slider");

    if(item.checked.classList.contains("#quaranty")) {
      sliderQuaranty.classList.add("active-slider")
    }})
  }

  document.addEventListener("DOMContentLoaded", radioChecked)
