const cursorCircle = document.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
  cursorCircle.style.left = e.pageX + "px";
  cursorCircle.style.top = e.pageY + "px";
});

const sentences = ["Hello, I'm Nick Shosey.", "I am a Developer."];
let index = 0;
let letterIndex = 0;
let isDeleting = false;
const textContainer = document.getElementById("typed-text");

function type() {
  if (!isDeleting && letterIndex < sentences[index].length) {
    textContainer.textContent += sentences[index][letterIndex];
    letterIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && letterIndex > 0) {
    textContainer.textContent = sentences[index].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(type, 50);
  } else if (letterIndex === sentences[index].length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (letterIndex === 0) {
    isDeleting = false;
    index = (index + 1) % sentences.length;
    setTimeout(type, 100);
  }
}

window.onload = type;

const modal = document.getElementById("contactModal");
const btn = document.getElementById("contactButton");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.querySelector("#contactModal form").action =
  "https://formspree.io/f/xnqkvnqo";
