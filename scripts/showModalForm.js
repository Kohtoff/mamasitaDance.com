const mainPageBtn = document.querySelector(".form__start-btn");
const bookBtn = document.body.querySelector(".book__btn");
const popup = document.body.querySelector(".popup");
const closeBtn = document.querySelector(".modal-form__close");
const form = document.querySelector(".modal-form");
const formInputs = document.querySelectorAll(".form-control");
const submitBtn = document.querySelector(".slide__more-info-btn");

function showForm(e) {
  e.preventDefault();
  console.log('here');
  if (!popup.style.display || popup.style.display === 'none') {
    popup.style.display = "flex";
  }
}

function closeForm() {
  if (popup.style.display === "flex") {
    popup.style.display = "none";
  }
}

function storeData() {
  const formData = new FormData(form);
  return Array.from(formData.entries()).reduce(
    (obj, pair) => ({
      ...obj,
      [pair[0]]: [pair[1]].join(),
    }),
    {}
  );
}
formInputs.forEach((item) => item.addEventListener("input", storeData));
if (mainPageBtn) {
  mainPageBtn.addEventListener("click", showForm);
} else {
    bookBtn.addEventListener('click', showForm);
}

closeBtn.addEventListener("click", closeForm);
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  closeForm();
  alert("Thanks for your feedback");
  console.log(storeData());
});