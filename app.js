//using selectors inside the element

const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  const button = question.querySelector(".question-btn");
  button.addEventListener("click", function () {
    question.classList.toggle("show-text");
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
  });
});

// traversing the dom
// const dropdownBtn = document.querySelectorAll(".question-btn");

// dropdownBtn.forEach(function (buttons) {
//   buttons.addEventListener("click", function (btn) {
//     const selectedItem = btn.currentTarget.parentElement.parentElement;
//     selectedItem.classList.toggle("show-text");
//   });
// });
