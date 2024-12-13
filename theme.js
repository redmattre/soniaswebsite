// Select all theme toggle elements
var toggleButtons = document.querySelectorAll('.theme-toggler');

// Flag to track the theme (default to dark)
var isDarkTheme = localStorage.getItem('theme') === 'light' ? false : true;

// Function to apply the theme
function applyTheme() {
  var root = document.documentElement;

  if (isDarkTheme) {
    // Apply dark theme
    root.style.setProperty('--fondale', '#6C6C6A'); // Grey background
    root.style.setProperty('--dettaglio', '#B27F97'); // Pink details
    root.style.setProperty('--textcolor', '#fff'); // White text
    localStorage.setItem('theme', 'dark'); // Save to localStorage
  } else {
    // Apply light theme
    root.style.setProperty('--fondale', '#fff'); // White background
    root.style.setProperty('--dettaglio', 'red'); // Red details
    root.style.setProperty('--textcolor', 'black'); // Black text
    localStorage.setItem('theme', 'light'); // Save to localStorage
  }
}

// Add event listeners to each button
toggleButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    isDarkTheme = !isDarkTheme; // Toggle the theme flag
    applyTheme(); // Apply the theme
  });
});

// Apply the saved theme on page load
applyTheme();

function adjustLineHeight() {
  var line = document.getElementById('horizontal-line');
  line.style.height = document.documentElement.scrollHeight + 'px';
}

// Adjust the line height initially and on window resize
window.addEventListener('load', adjustLineHeight);
window.addEventListener('resize', adjustLineHeight);