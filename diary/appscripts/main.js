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

function themeChanger() {
  counter++;
  if (counter === 1) {
    alert("Changed theme!");
    document.getElementById("themeLogo").src="resources/twiceLogo.svg.png";
    //document.getElementById("themePicture").src="resources/twice-background.jpg";
    document.body.style.backgroundColor = "rgb(249, 197, 150)";
    navBarColor = document.getElementById("topNavBar");
  } else {
    counter = counter-2;
    alert("Changed theme!");
    document.getElementById("themeLogo").src="resources/BlackpinkLogo.svg.png";
    //document.getElementById("themePicture").src="resources/blackpink-background.jpg";
    document.body.style.backgroundColor = "palevioletred";
  }
}

