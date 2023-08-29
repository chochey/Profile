document.getElementById("checkbox").addEventListener("change", function () {
  let lightSymbol = document.getElementById("light-theme-symbol");
  let darkSymbol = document.getElementById("dark-theme-symbol");

  if (this.checked) {
    document.body.setAttribute("data-theme", "dark");
    lightSymbol.style.display = "none";
    darkSymbol.style.display = "inline";
  } else {
    document.body.setAttribute("data-theme", "light");
    lightSymbol.style.display = "inline";
    darkSymbol.style.display = "none";
  }
});

// ----------------------------------------------------------------

const sentences = ["Hello, I'm Nick Shosey.", "I am a Web Developer."];
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
