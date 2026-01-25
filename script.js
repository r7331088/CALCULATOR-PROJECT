// Get display element
let display = document.getElementById("display");

// Function to add value to display
function appendValue(value) {
  display.value += value;
}

// Function to clear display
function clearDisplay() {
  display.value = "";
}

// Function to delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Function to calculate result
function calculate() {
  try {
    // Evaluate the expression
    display.value = eval(display.value);
  } catch {
    // Show error if calculation fails
    display.value = "Error";
  }
}
