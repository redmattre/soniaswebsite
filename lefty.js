// Select all theme toggle elements
var toggleButtons = document.querySelectorAll('.hand-toggler');
var navIcon = document.getElementById('nav-icon3');
var mainName = document.getElementById('mainName');

// Flag to track the theme (default to dark)
var isDarkTheme = localStorage.getItem('hand') === 'left' ? false : true;

// Function to check if we are in portrait mode
function isPortraitMode() {
  return window.matchMedia("(orientation: portrait)").matches;
}

// Run the script only if in portrait mode
if (isPortraitMode()) {
  // Select all theme toggle elements
  var toggleButtons = document.querySelectorAll('.hand-toggler');
  var navIcon = document.getElementById('nav-icon3');
  var mainName = document.getElementById('mainName');

  // Flag to track the theme (default to dark)
  var isDarkTheme = localStorage.getItem('hand') === 'left' ? false : true;

  // Function to apply the theme
  function applyHand() {
    var root = document.documentElement;

    if (isDarkTheme) {
      // Right-handed layout
      mainName.style.marginLeft = '10vw';
      mainName.style.marginRight = 'auto';
      mainName.style.textAlign = 'left';
      mainName.style.left = '10vw';

      navIcon.style.right = '8.2vw';
      navIcon.style.left = 'auto';

      localStorage.setItem('hand', 'right'); // Save to localStorage
    } else {
      // Left-handed layout
      mainName.style.marginLeft = 'auto';
      mainName.style.marginRight = '10vw';
      mainName.style.textAlign = 'right';
      mainName.style.right = '10vw';

      navIcon.style.right = 'auto';
      navIcon.style.left = '10vw';

      localStorage.setItem('hand', 'left'); // Save to localStorage
    }
  }

  // Add event listeners to each button
  toggleButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      isDarkTheme = !isDarkTheme; // Toggle the theme flag
      applyHand(); // Apply the theme
    });
  });

  // Apply the saved theme on page load
  applyHand();
}