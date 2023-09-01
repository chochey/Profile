const cursorCircle = document.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
  cursorCircle.style.left = e.pageX + "px";
  cursorCircle.style.top = e.pageY + "px";
});

// ----------------------------------------------------------------

const sentences = ["Hello, I'm Nick Shosey.", "I am a Developer."];
let index = 0;
let letterIndex = 0;
let isDeleting = false;
const textContainer = document.getElementById("typed-text");

function type() {
  if (!isDeleting && letterIndex < sentences[index].length) {
    // Add the next character
    textContainer.textContent += sentences[index][letterIndex];
    letterIndex++;
    setTimeout(type, 100); // Typing speed
  } else if (isDeleting && letterIndex > 0) {
    // Remove the last character
    textContainer.textContent = sentences[index].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(type, 50); // Deleting speed (typically faster than typing speed)
  } else if (letterIndex === sentences[index].length) {
    // Start deleting after a delay
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (letterIndex === 0) {
    // Move to the next sentence or loop back to the beginning
    isDeleting = false;
    index = (index + 1) % sentences.length;
    setTimeout(type, 100); // Delay before starting the next sentence
  }
}

// Start the typing effect once the page is fully loaded.
window.onload = type;

// ----------------------------------------------------------------

// Get the modal
var modal = document.getElementById("contactModal");

// Get the button that opens the modal
var btn = document.getElementById("contactButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Set the action attribute for the contact form
document.querySelector("#contactModal form").action =
  "https://formspree.io/f/xnqkvnqo";

// Get the modal
var modal = document.getElementById("contactModal");

// Get the button that opens the modal
var btn = document.getElementById("contactButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Set the action attribute for the contact form
document.querySelector("#contactModal form").action =
  "https://formspree.io/f/xnqkvnqo";

// Get the modal
var modal = document.getElementById("contactModal");

// Get the button that opens the modal
var btn = document.getElementById("contactButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Set the action attribute for the contact form
document.querySelector("#contactModal form").action =
  "https://formspree.io/f/xnqkvnqo";
