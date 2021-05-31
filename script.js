"using strict";

// Project : Modal Windows

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnsOpenModal);
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   console.log(btnsOpenModal[i].textContent);
// }

// Lecture : Working with Classes

// at line 15 in index.html file the class hidden is applied so we are unable to see the overlay pae
// so to bring it back is the work of javascript

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  //   console.log("button clicked");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}
btn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Lecture : Handling an Esc keypress event
document.addEventListener("keydown", function (e) {
  if (e.code === "Escape" && !modal.classList.contains(".hidden")) {
    closeModal();
  }
  //   console.log(typeof e.code);
});
