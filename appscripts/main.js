//setup navigation bar. referred to https://www.youtube.com/watch?v=K-PEhxtC58Q&ab_channel=dcode
const navMenu = document.querySelector(".nav");
const navOverlay = document.querySelector(".nav-overlay");
const navButton = document.querySelector(".navButton");

navButton.addEventListener("click", () => {
    navMenu.classList.add("nav-open");
    navOverlay.classList.add("nav-overlay-open");
});

navOverlay.addEventListener("click", () => {
    navMenu.classList.remove("nav-open");
    navOverlay.classList.remove("nav-overlay-open");
});

// trying out theme changer
  let counter = 0;
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("themeLogo").onclick = themeChanger;
});

function themeChanger() {
  counter++;
  if (counter === 1) {
    alert("Changed theme!");
    document.getElementById("themeLogo").src="resources/twiceLogo.svg.png";
    document.getElementById("themePicture").src="resources/twice-background.jpg";
    document.body.style.backgroundColor = "rgb(249, 197, 150)";
    navBarColor = document.getElementById("topNavBar");
  } else {
    counter = counter-2;
    alert("Changed theme!");
    document.getElementById("themeLogo").src="resources/BlackpinkLogo.svg.png";
    document.getElementById("themePicture").src="resources/blackpink-background.jpg";
    document.body.style.backgroundColor = "palevioletred";
  }
}

//intro gender ratio pie chart
const introFansData = {
    labels: [
      'Male',
      'Female',
      'Others',
    ],
    datasets: [{
      label: 'Percentage',
      data: [26.7, 70.2, 2.5],
      backgroundColor: [
        "pink", "black", "rgb(250,249,246)"],
        //'rgb(255, 99, 132)',
        //'rgb(54, 162, 235)',
        //'rgb(255, 205, 86)',],
      hoverOffset: 4
    }]
  };
  new Chart("myChart",
  {
      type: "doughnut",
      data: introFansData,
      options: { 
          maintainAspectRatio: false,
          legend: {
              display: true,
              fontColor: "rgb(199,21,133)",
          },
          title: {
              display: true,
              text: ["Gender Ratio of Kpop Fans"],//set this to 'Number of female graduates','per Course'
              fontFamily: "sans-serif",
              fontSize: 20,
              fontColor: "rgb(0,0,0)",
          }
      }
  });

  function GenderRatio1() {
    document.getElementById("ratioFact").innerHTML = "According to Lafan (2020), you would be among " +"<span class='highlight'>" + "26.7%" + "</span>" + " of Kpop fans.";
  };
  function GenderRatio2() {
    document.getElementById("ratioFact").innerHTML = "According to Lafan (2020), you would be among " +"<span class='highlight'>" + "70.2%" + "</span>" + " of Kpop fans.";
  }
  function GenderRatio3() {
    document.getElementById("ratioFact").innerHTML = "According to Lafan (2020), you would be among " +"<span class='highlight'>" + "2.50%" + "</span>" + " of Kpop fans.";
  }

  /*function addGenderRatioData(){
    const newDataset = {
      label: 'Percentage',
      data: [26.7, 70.2, 2.5],
      backgroundColor:['rgb(255, 99, 132)', 'rgb(54, 162, 235)','rgb(255, 205, 86)'],
      hoverOffset: 4,
    };
    introFansData.datasets.data.push(newDataset);
    introFansData.update();
  };*/
 

//source = https://codepen.io/plotly/pen/EVrRxR
Plotly.plot('googleSearchCountry', [{
  type: 'choropleth',
  locations: ['USA','AUS','GBR','KOR','JPN','IDN'],
  z: [0.4, 0.2, 0.2, 0.4, 0.2, 0.6]
}], {
  geo: {
    resolution: 60,
    lataxis: { 
      range: [-75, 60] 
    }, 
    lonaxis: {
      range: [-120, 140]
    }
  },width:825, height:525,
})
const KoreaTop = ["BTS", "Apink", "Girl's Generation", "EXO", "GOT7"];
function printTopGroups () {
  let text = "";
  var i = 0; 
  for (i = 0; i < KoreaTop.length; i++) {
    text += KoreaTop[i] + "<br>";
  }
  document.getElementById("topGroupList").innerHTML = text;
}