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
  let counterThemeChanger = 0; //counter helps me to cycle through the different themes

function themeChanger() {
  counterThemeChanger++;
  if (counterThemeChanger === 1) {
    alert("Changed theme!");
    document.getElementById("themeLogo").src="resources/twiceLogo.svg.png";
    document.getElementById("themePicture").src="resources/twice-background.jpg";
    document.body.style.backgroundColor = "rgb(249, 197, 150)";
    navBarColor = document.getElementById("topNavBar");
  } else {
    counterThemeChanger = counterThemeChanger-2;
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
          aspectRatio: 1/1,
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

  // showing a different fact based on whether male, female or others was clicked
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
 

//making a map chart of most popular Kpop groups in several countries. source = https://codepen.io/plotly/pen/EVrRxR
Plotly.plot('googleSearchCountry', [{
  type: 'choropleth',
  locations: ['USA','AUS','GBR','KOR','JPN','IDN','CHN'],
  z: [0.4, 0.2, 0.2, 0.4, 0.2, 0.6, 0.6]
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

// -- click to find out the top groups of each country --

//listing the datasets
const AusTop = ["BTS (Male)", "Girl's Generation (Female)", "GOT7 (Male)", "SHINee (Male)", "iKON (Male)"];
const UKTop = ["BTS (Male)", "BIGBANG (Male)", "GOT7 (Male)", "Girl's Generation (Female)", "2PM (Male)"];
const USTop = ["Girl's Generation (Female)","BTS (Male)", "BIGBANG (Male)", "Blackpink (Female)",  "SHINee (Male)"];
const ChinaTop = ["Girl's Generation (Female)","T-ara (Female)", "BIGBANG (Male)",  "EXO (Male)", "AOA (Female)"];
const IndoTop = ["EXO (Male)", "Red Velvet (Female)",  "SISTAR (Female)", "GOT7 (Male)", "Girl's Generation (Female)"];
const JapanTop = ["JYJ (Male)","Girl's Generation (Female)", "CNBLUE (Male)",  "2PM (Male)", "BTS (Male)"];
const PhilTop = ["Girl's Generation (Female)","BTS (Male)", "EXO (Male)",  "GOT7 (Male)", "Red Velvet (Female)"];
const KoreaTop = ["BTS (Male)", "Apink (Female)", "Girl's Generation (Female)", "EXO (Male)", "GOT7 (Male)"];

// link buttons to printing function using event listener 
document.getElementById("buttonAus").addEventListener("click", printTopGroups);
document.getElementById("buttonUK").addEventListener("click", printTopGroups);
document.getElementById("buttonUS").addEventListener("click", printTopGroups);
document.getElementById("buttonChina").addEventListener("click", printTopGroups);
document.getElementById("buttonIndo").addEventListener("click", printTopGroups);
document.getElementById("buttonJap").addEventListener("click", printTopGroups);
document.getElementById("buttonPhil").addEventListener("click", printTopGroups);
document.getElementById("buttonKor").addEventListener("click", printTopGroups);

// using for loop + if/else statement to print out lists of top kpop groups in each country in each array
function printTopGroups(event) {
  let text = "";
  const buttonId = event.target.id;
  for (let i = 0; i < 5; i++) {
    if (buttonId === "buttonAus") { text += AusTop[i] + "<br>";
  } else if (buttonId === "buttonUK") {text += UKTop[i] + "<br>";
  } else if (buttonId === "buttonUS") {text += USTop[i] + "<br>";
  } else if (buttonId === "buttonChina") {text += ChinaTop[i] + "<br>";
  } else if (buttonId === "buttonIndo") {text += IndoTop[i] + "<br>";
  } else if (buttonId === "buttonJap") {text += JapanTop[i] + "<br>";
  } else if (buttonId === "buttonPhil") {text += PhilTop[i] + "<br>";
    } else {
      text += KoreaTop[i] + "<br>";
    }
  }
  document.getElementById("topGroupList").innerHTML = text;
}

// -- Physical Album Sales Bar Charts: Bar chart by album --
// Make a request for the CSV file
const dataP1 = fetch("resources/data/best-selling-physical-by-album-sorted.csv")
.then(function (response){
    return response.text();
}) 
.then(function(dataP1){
    const table = [];
    const rows = dataP1.split("\r\n");

    rows.forEach((r,index) => {
        const item = r.split(",");
        table.push(item);
    });
    console.log(table);

    const albumLabel = [];
    const groupLabel = [];
    const genderLabel = [];
    const salesData = [];

    //using for loop to add elements to data arrays created above
    for(j=0;j<table.length;j++)
    {
        //console.log(table[j][3]);
        if(table[j][4]>=-0)
        {
          albumLabel.push(table[j][3]);  
          groupLabel.push(table[j][2]);
          genderLabel.push(table[j][1]);
          salesData.push(table[j][4]);
        }
    };
    //using for loop to add colors to bars in bar chart below without manual input. red for female, blue for male
    const albumColors = [];
    function albumLabelColor() {
      var i = 0; 
      for (i = 0; i < 11; i++) {
        albumColors.push("red");
      };
      for (i = 11; i < 54; i++) {
        albumColors.push("blue");
      };
    };
    albumLabelColor();

    //dataObj for the top album sales chart
    const dataObj = {
       labels: albumLabel,
        datasets: [
            {
              label: "Sales",
              data: salesData,
                borderWidth: 2,
                backgroundColor: albumColors,
                //borderColor: "hsla(0,100%,50%,1)"
            }
        ]
    };

    //creating the bar chart
    const albumChart = new Chart("best-selling-album",
    {
        type: "bar",
        data: dataObj,
        options: { 
          maintainAspectRatio: false, // forces it into a square
          aspectRatio: 1/1,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ['Albums with the Top Sales in South Korea'],
                fontFamily: "TrebuchetMS",
                fontSize: 24,
                fontColor: 'rgb(0, 0, 0)',
            },
            scales : {
                yAxes:[{
                    ticks:{
                        beginAtZero: true,
                        suggestedMin: 0,
                        suggestedMax: 5100000,
                    }
                }],
                xAxes:[{
                  ticks:{
                      display:false,
                  },
              }],
            },
        }
    }); 

// -- chart with only 1 album per group

// datasets for graph with only 1 album per group:
const albumLabel2 = ["THE REVE FESTIVAL 2022 - BIRTHDAY","ANTIFRAGILE","CHESHIRE","BETWEEN 1&2","OMG","AFTER LIKE","GIRLS - THE 2ND MINI ALBUM","BORN PINK","MAP OF THE SOUL: 7","4TH ALBUM `FACE THE SUN`","MAXIDENT","THE NAME CHAPTER: TEMPTATION","STICKER - THE 3RD ALBUM","맛 (HOT SAUCE) - THE 1ST ALBUM","RESONANCE PT. 1","MANIFESTO: DAY 1","DON'T MESS UP MY TEMPO"];
const salesData2 = [1014751,1026011,1056316,1130956,1243200,1667348,1823499,2679375,5022205,3461702,3256303,2634872,2434408,2168436,1670800,1563356,1452030];

// to edit colors in new chart
const albumColors2 = [];
function albumLabelColor2() {
  var i = 0; 
  for (i = 0; i < 8; i++) {
    albumColors2.push("red");
  };
  for (i = 8; i < 17; i++) {
    albumColors2.push("blue");
  };
};
albumLabelColor2;

// dataObj2 for graph with only 1 album per group:
const dataObj2 = {
  labels: albumLabel2,
   datasets: [
       {
         label: "Sales",
         data: salesData2,
           borderWidth: 2,
           backgroundColor: albumColors2,
           //borderColor: "hsla(0,100%,50%,1)"
       }
   ]
};
// using if/else to set up the function  that allows us to display between data in the same canvas
counterAlbumChanger = 0
function updateAlbumChart(){
  counterAlbumChanger++;
  if (counterAlbumChanger === 1) {
  albumChart.data.labels = albumLabel2;
  albumChart.data.datasets[0] = {
  label: "Sales",
  data: salesData2,
  backgroundColor: ["red","red","red","red","red","red","red","red","blue","blue","blue","blue","blue","blue","blue","blue","blue"],
}
albumChart.update(); 
document.getElementById("buttonPhysChange").innerHTML = "Toggle View to All Albums";
  } else {
    counterAlbumChanger = counterAlbumChanger-2;
    albumChart.data.labels = albumLabel;
  albumChart.data.datasets[0] = {
  label: "Sales",
  data: salesData,
  backgroundColor: albumColors,}
  albumChart.update(); 
  document.getElementById("buttonPhysChange").innerHTML = "Toggle View to Unqiue Albums Only";

  }
};
// button to toggle between the album charts
document.getElementById("buttonPhysChange").addEventListener("click",updateAlbumChart);

});

// -- Physical Album Sales Bar Charts: Bar chart by artist --
// Make a request for the CSV file
const dataP2 = fetch("resources/data/best-selling-physical-by-artist.csv")
.then(function (response){
    return response.text();
}) 
.then(function(dataP2){
    const table = [];
    const rows = dataP2.split("\r\n");

    rows.forEach((r,index) => {
        const item = r.split(",");
        table.push(item);
    });
    console.log(table);

    const groupLabel = [];
    const genderLabel = [];
    const salesData = [];
    const barColor = [];

    //using for loop to add elements to data arrays created above
    for(j=0;j<table.length;j++)
    {
          groupLabel.push(table[j][2]);
          genderLabel.push(table[j][1]);
          salesData.push(table[j][3]);
          barColor.push(table[j][4]);
    };
console.log(barColor);
    //dataObj for the top album sales chart
    const dataObj = {
       labels: groupLabel,
        datasets: [
            {
              label: "Sales",
              data: salesData,
                borderWidth: 2,
                backgroundColor: barColor,
                //borderColor: "hsla(0,100%,50%,1)"
            }
        ]
    };

    //creating the bar chart
    const albumChart = new Chart("best-selling-artist",
    {
        type: "bar",
        data: dataObj,
        options: { 
            maintainAspectRatio: false, // forces it into a square
            aspectRatio: 1/1,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ['Kpop Groups with the Top Sales in South Korea'],
                fontFamily: "TrebuchetMS",
                fontSize: 24,
                fontColor: 'rgb(0, 0, 0)',
            },
            scales : {
                yAxes:[{
                    ticks:{
                        beginAtZero: true,
                        suggestedMin: 0,
                        suggestedMax: 40000000,
                    }
                }],
                xAxes:[{
                  ticks:{
                      display:false,
                  },
              }],
            },
        }
    }); 

});


// -- Youtube Views Chart: Scatter chart by video --
// Make a request for the CSV file
const dataD1 = fetch("resources/data/youtube-views-by-video.csv")
.then(function (response){
    return response.text();
}) 
.then(function(dataD1){
    const table = [];
    const rows = dataD1.split("\r\n");

    rows.forEach((r,index) => {
        const item = r.split(",");
        table.push(item);
    });
    console.log(table);

    const genderLabel = [];
    const groupLabel = [];
    const videoLabel = [];
    const streamsDataTotal = [];
    const streamsDataYesterday = [];
    const dotColor = [];

    //using for loop to add elements to data arrays created above
    for(j=0;j<table.length;j++)
    {
          genderLabel.push(table[j][1]);
          groupLabel.push(table[j][2]);
          videoLabel.push(table[j][3]);
          streamsDataTotal.push(table[j][8]);
          streamsDataYesterday.push(table[j][5]);
          dotColor.push(table[j][6]);
    };
    //dataObj for the top album sales chart
    const scatterArray = streamsDataTotal.map((xvalue, index) => {
      let scatterObj = {};
      scatterObj.x = xvalue;
      scatterObj.y = streamsDataYesterday[index];
      return scatterObj;
    })
    //console.log(scatterArray);
    const dataObj = {
        datasets: [
            {
              //label: test2,
              data: scatterArray,
                borderWidth: 2,
                backgroundColor: dotColor,
                fill: false,
                //borderColor: "hsla(0,100%,50%,1)"
            }
        ]
    };
console.log(dotColor);
    //creating the scatter chart
    const albumChart = new Chart("youtube-views-by-video",
    {
        type: "scatter",
        data: dataObj,
        options: { 
            maintainAspectRatio: true, // forces it into a square
            //aspectRatio: 1/1,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ["Most Viewed Kpop Group' MVs"],
                fontFamily: "TrebuchetMS",
                fontSize: 24,
                fontColor: 'rgb(0, 0, 0)',
            },
            scales : {
                yAxes:[{
                    ticks:{
                        beginAtZero: true,
                        suggestedMin: 0,
                        suggestedMax: 750000,
                    },
                    scaleLabel: {
                      labelString: 'Daily Increases',
                      display: true,
                    },
                }],
                xAxes:[{
                  ticks:{
                      display:true,
                      beginAtZero: true,
                      suggestedMax: 2500,
                      },
                      scaleLabel: {
                        labelString: 'Total Number of Views (in millions)',
                        display: true,
                  },
              }],
            },
            tooltips: {
              callbacks: {
                  label: function(tooltipItem, data) {
                      var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || 'Other';
                      var label = data.labels[tooltipItem.index];
                      return datasetLabel + ': ' + label;
                  }
              }
          }
        }
    }); 

});