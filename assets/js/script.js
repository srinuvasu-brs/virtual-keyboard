function createVirtualKeyboard() {
  const keyboardContainer = document.getElementById("keyboard");
  const outputTextArea = document.getElementById("output");
  
  const keys = [
"1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
"Delete", "!", "@", "#", "$", "%", " ", "^", "&", "*",
"(", ")", "[", "]", "Q", "W", "E", "R", "T", "Y", "U",
"I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K",
"L", "Shift", "Z", "X", "C", "V", "B", "N", "M", "Space",
];
  let isUpperCase = false;

  keys.forEach((key) => {
    const keyElement = document.createElement("div");
    keyElement.classList.add("key");
    keyElement.textContent = key;

    if (key === "Shift" || key === "Delete" || key==="Space") {
      keyElement.addEventListener("click", () =>
        handleSpecialKeyClick(key)
      );
    } else {
      keyElement.addEventListener("click", () => handleKeyClick(key));
    }

    keyboardContainer.appendChild(keyElement);
  });

  // Function to handle key click events
  function handleKeyClick(key) {
    const currentText = outputTextArea.textContent;
    const typedKey = isUpperCase ? key.toUpperCase() : key.toLowerCase();
    outputTextArea.textContent = currentText + typedKey;
  }

  // Function to handle special key click events
  function handleSpecialKeyClick(key) {
    switch (key) {
      case "Shift":
        isUpperCase = !isUpperCase;
        break;
      case "Delete":
        outputTextArea.textContent = outputTextArea.textContent.slice(
          0,
          -1
        );
        break;
        case "Space":  // Remove the leading space here
outputTextArea.textContent += " ";
break;

      default:
        break;
    }
  }
}

// Call the function to create the virtual keyboard
createVirtualKeyboard();
// Change Theme
function setTheme(theme) {
document.documentElement.style.setProperty("--primary-color", theme);
localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);