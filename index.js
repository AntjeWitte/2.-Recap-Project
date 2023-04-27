// phew… not a lot going on here. Please add some code!
console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const bookmark = document.querySelector('[data-js="bookmark"]');
const button = document.querySelector('[data-js="button"]');
const answer = document.querySelector('[data-js="answer"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--active");
  console.log(bookmark);
});

button.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");

  if (answer.classList.contains("card__answer--active")) {
    button.textContent = "Hide answer";
  } else {
    button.textContent = "Show answer";
  }

  console.log(button);
});
