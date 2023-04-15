//setup navigation bar. referred to https://www.youtube.com/watch?v=K-PEhxtC58Q&ab_channel=dcode
const navMenu = document.querySelector(".nav");
const navOverlay = document.querySelector(".nav-overlay");
const navButton = document.querySelector(".navButton");

// allows navigation menu to appear when button is clicked
navButton.addEventListener("click", () => {
    navMenu.classList.add("nav-open");
    navOverlay.classList.add("nav-overlay-open");
});

// allows navigation menu to disappear when any other area of the screen is clicked
navOverlay.addEventListener("click", () => {
    navMenu.classList.remove("nav-open");
    navOverlay.classList.remove("nav-overlay-open");
});

// Theme changer
let counter = 0; //counter helps me to cycle through the different themes
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("themeLogo").onclick = themeChanger;
});

// Theme changer
let counterThemeChanger = 0; //counter helps me to cycle through the different themes

function themeChanger() {
  counterThemeChanger++;
  if (counterThemeChanger === 1) {
    //BTS theme
    document.getElementById("themeLogo").src="resources/bts-logo.png";
    document.body.style.backgroundColor = 'rgb(195,155,211)';

  } else if (counterThemeChanger === 2) {
    //New Jeans theme
    document.getElementById("themeLogo").src="resources/newjeans-logo.jpg";
    document.body.style.backgroundColor = 'rgb(137,207,240)';
  } else if (counterThemeChanger === 3) {
    //IVE theme
    document.getElementById("themeLogo").src="resources/ive-logo.jpg";
    document.body.style.backgroundColor = "rgb(249, 197, 150)";
  } else {
    counterThemeChanger = 0;
    alert("Just pick one!");
    document.getElementById("themeLogo").src="resources/BlackpinkLogo.svg.png";
    document.body.style.backgroundColor = "palevioletred";
  }
}

