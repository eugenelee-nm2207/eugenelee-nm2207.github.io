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
    //BTS theme
    document.getElementById("themeLogo").src="resources/bts-logo.png";
    document.getElementById("themePicture").src="resources/bts-background.jpg";
    document.getElementById("letsgopic").src="resources/bts-letsgo.gif"; document.getElementById("letsgopic").title = "Let's get started!";
    document.getElementById("powerpic").src = "resources/bts-power.gif"; document.getElementById("powerpic").title = "BTS may have popularized a more androgynous look for Male Kpop idols, breaking away from normative male beauty standards (or did they?)";
    document.getElementById("thankpic").src = "resources/bts-thankyou.gif"; document.getElementById("thankpic").title = "Off you go!";
    document.body.style.backgroundColor = 'rgb(195,155,211)';

  } else if (counterThemeChanger === 2) {
    //New Jeans theme
    document.getElementById("themeLogo").src="resources/newjeans-logo.jpg";
    document.getElementById("themePicture").src="resources/newjeans-background.webp";
    document.getElementById("letsgopic").src="resources/newjeans-letsgo.gif"; document.getElementById("letsgopic").title = "How many times have you watched this";
    document.getElementById("powerpic").src = "resources/newjeans-power.gif"; document.getElementById("powerpic").title = "NewJeans was unfortunately embroiled in a controversy because they debuted as minors. However, they have also been touted for their fresh, unconventional image and more hip-hop style dances previously atypical of female groups!";
    document.getElementById("thankpic").src = "resources/newjeans-thankyou.gif";document.getElementById("thankpic").title = "Don't forget to stan NewJeans!";
    document.body.style.backgroundColor = 'rgb(137,207,240)';
  } else if (counterThemeChanger === 3) {
    //IVE theme
    document.getElementById("themeLogo").src="resources/ive-logo.jpg";
    document.getElementById("themePicture").src="resources/ive-background.webp";
    document.getElementById("letsgopic").src="resources/ive-letsgo.gif"; document.getElementById("letsgopic").title = "Celebrating the completion of this project (finally)";
    document.getElementById("powerpic").src = "resources/ive-power.gif"; document.getElementById("powerpic").title = "Wonyoung went viral for her 'pick me' mannerisms, which actually gained her loads of fans, male and female alike. Perhaps equality today is being empowered regardless of what gender-typed behaviour you choose to take on";
    document.getElementById("thankpic").src = "resources/ive-thankyou.gif";document.getElementById("thankpic").title = "Slay all day everyday";
    document.body.style.backgroundColor = "rgb(249, 197, 150)";
  } else {
    counterThemeChanger = 0;
    alert("Just pick one!");
    document.getElementById("themeLogo").src="resources/BlackpinkLogo.svg.png";
    document.getElementById("themePicture").src="resources/blackpink-background.jpg";
    document.getElementById("letsgopic").src="resources/lets-go-lisa.gif"; document.getElementById("letsgopic").title = "Let's get into this awesome data story!";
    document.getElementById("powerpic").src = "resources/bp-power.gif"; document.getElementById("powerpic").title = "💥🔫The biggest girl group right now💥🔫";
    document.getElementById("thankpic").src = "resources/bp-thankyou.gif";document.getElementById("thankpic").title = "Hope you had fun reading the data story!";

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
        "#0047AB", "red", "green"],
      hoverOffset: 4
    }]
  };
  new Chart("myChart",
  {
      type: "doughnut",
      data: introFansData,
      options: { 
          maintainAspectRatio: true,
          aspectRatio: 1/1,
          legend: {
              display: true,
              fontColor: "rgb(199,21,133)",
          },
          title: {
              display: true,
              text: ["Gender Ratio of Kpop Fans"],
              fontFamily: "sans-serif",
              fontSize: 20,
              fontColor: "rgb(0,0,0)",
          },
          legend: {
            display: true,  
            labels:{
              fontColor: 'black',
              fontSize: 13,
            }
              },
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
    //console.log(table); //to test if table of data is being constructed properly

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
        albumColors.push("#0047AB");
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
                        fontColor: "black",
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

// -- chart with only 1 album per group --

// datasets for graph with only 1 album per group:
const albumLabel2 = ["RED VELVET: THE REVE FESTIVAL 2022 - BIRTHDAY","LE SSEARFIM: ANTIFRAGILE","ITZY: CHESHIRE","TWICE: BETWEEN 1&2","NewJeans: OMG","IVE: AFTER LIKE","aespa: GIRLS - THE 2ND MINI ALBUM","BLACKPINK: BORN PINK","BTS: MAP OF THE SOUL: 7","SEVENTEEN: 4TH ALBUM `FACE THE SUN`","Stray Kids: MAXIDENT","TXT: THE NAME CHAPTER: TEMPTATION","NCT 127: STICKER - THE 3RD ALBUM","NCT DREAM: 맛 (HOT SAUCE) - THE 1ST ALBUM","NCT: RESONANCE PT. 1","Enhypen: MANIFESTO: DAY 1","EXO: DON'T MESS UP MY TEMPO"];
const salesData2 = [1014751,1026011,1056316,1130956,1243200,1667348,1823499,2679375,5022205,3461702,3256303,2634872,2434408,2168436,1670800,1563356,1452030];


// dataObj2 for graph with only 1 album per group:
const dataObj2 = {
  labels: albumLabel2,
   datasets: [
       {
         label: "Sales",
         data: salesData2,
           borderWidth: 2,
           //backgroundColor: albumColors,
           //borderColor: "hsla(0,100%,50%,1)"
       }
   ]
};
// using if/else to set up the function  that allows us to toggle between different displays of the data in the same canvas
counterAlbumChanger = 0
function updateAlbumChart(){
  counterAlbumChanger++;
  if (counterAlbumChanger === 1) { //change to new graph (unique albums)
  albumChart.data.labels = albumLabel2;
  albumChart.data.datasets[0] = {
  label: "Sales",
  data: salesData2,
  backgroundColor: ["red","red","red","red","red","red","red","red","#0047AB","#0047AB","#0047AB","#0047AB","#0047AB","#0047AB","#0047AB","#0047AB","#0047AB"],
}
albumChart.update(); 
document.getElementById("buttonPhysChange").innerHTML = "Toggle View to All Albums";
  } else {
    counterAlbumChanger = counterAlbumChanger-2; //change to old graph (all albums)
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
    //console.log(table); //to test if table of data is being constructed properly

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
                        fontColor: "black",
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

// -- making a map chart of most popular Kpop groups in several countries. source = https://codepen.io/plotly/pen/EVrRxR --
const mapPlot = Plotly.plot('googleSearchCountry', [{
  type: 'choropleth',
  locations: ['USA','AUS','GBR','KOR','JPN','IDN','CHN', 'PHL'],
  z: [0.6, 0.8, 0.8, 0.6, 0.8, 0.4, 0.4, 0.6],
  colorbar: {
    title: 'Percentage Male Groups',
    thickness: 30,
},
colorscale: [ //color scale referenced from https://plotly.com/javascript/colorscales/. generates gradient from red (0) to blue (1)
  ['0.0', 'rgb(165,0,38)'],
  ['0.1', 'rgb(215,48,39)'],
  ['0.2', 'rgb(244,109,67)'],
  ['0.3', 'rgb(253,174,97)'],
  ['0.4', 'rgb(254,224,144)'],
  ['0.5', 'rgb(224,243,248)'],
  ['0.6', 'rgb(171,217,233)'],
  ['0.7', 'rgb(116,173,209)'],
  ['0.8', 'rgb(69,117,180)'],
  ['1.0', 'rgb(49,54,149)']
]
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

// -- click to find out top 5 groups section --
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

// -- YouTube Views Scatter Chart -- 

//setting up arrays for scatter chart
$(document).ready(function() { 

  var TITLE = 'Most Viewed YouTube Videos by Unique Kpop Groups';

  var POINT_X = 'Streams (in millions)'; // column name for x values in data.csv
  var POINT_X_PREFIX = ''; // prefix for x values, eg '$'
  var POINT_X_POSTFIX = ''; // postfix for x values, eg '%'
  
  var POINT_Y = 'Daily Increases'; // column name for y values in data.csv
  var POINT_Y_PREFIX = ''; // prefix for x values, eg 'USD '
  var POINT_Y_POSTFIX = ''; // postfix for x values, eg ' kg'

  var POINT_NAME = 'Item'; // point names that appear in tooltip
  var POINT_COLOR = ['red','#0047AB','red','#0047AB','#0047AB','red','red','#0047AB','#0047AB','red','red','#0047AB','#0047AB','red','red','red','red','#0047AB','red','#0047AB','#0047AB','#0047AB','#0047AB','red','red','#0047AB','red','red','#0047AB','#0047AB','#0047AB','#0047AB','#0047AB', 'red', 'red','red','red','#0047AB','red','#0047AB','#0047AB','red','green','#0047AB','#0047AB','#0047AB','red','red','red','red']; // eg `black` or `rgba(10,100,44,0.8)`
  var POINT_RADIUS = 6; // radius of each data point

  var X_AXIS = 'Streams (in millions)'; // x-axis label, label in tooltip
  var Y_AXIS = 'Daily Increases'; // y-axis label, label in tooltip

  var SHOW_GRID = true; // `true` to show the grid, `false` to hide

  //arrays when toggled to all female
  var POINT_XF = 'Streams (in millions)F'; // column name for x values in data.csv
  var POINT_YF = 'Daily IncreasesF'; // column name for y values in data.csv
  var POINT_NAMEF = 'ItemF'; // point names that appear in tooltip

  //arrays when toggle to all male
  var POINT_XM = 'Streams (in millions)M'; // column name for x values in data.csv
  var POINT_YM = 'Daily IncreasesM'; // column name for y values in data.csv
  var POINT_NAMEM = 'ItemM'; // point names that appear in tooltip
  
  //arrays when toggle to all average
  var POINT_XA = 'Streams (in millions)A'; // column name for x values in data.csv
  var POINT_YA = 'Daily IncreasesA'; // column name for y values in data.csv
  var POINT_NAMEA = 'ItemA'; // point names that appear in tooltip

  //fetching csv file:
    // Read data file with random string generated by current time
    // to bypass browser cache, and create chart
  $.get('./resources/data/youtube-views-by-video2.csv', {'_': $.now()}, function(csvString) {

    var rows = Papa.parse(csvString, {header: true}).data;

    //creating data object for default view
    var data = rows.map(function(row) {
      return {
        x: row[POINT_X],
        y: row[POINT_Y],
        name: row[POINT_NAME],
      }
    })

    var scatterChartData = {
			datasets: [{
				label: POINT_NAME,
				backgroundColor: POINT_COLOR,
        data: data,
        pointRadius: POINT_RADIUS,
        pointHoverRadius:  POINT_RADIUS + 4, // point enlarges when mouse hovers over
			}]
    };
    //creating data object for toggles: female, male and averages
    var dataF = rows.map(function(row) {
      return {
        x: row[POINT_XF],
        y: row[POINT_YF],
        name: row[POINT_NAMEF],
      }
    });

    var dataM = rows.map(function(row) {
      return {
        x: row[POINT_XM],
        y: row[POINT_YM],
        name: row[POINT_NAMEM],
      }
    });

    var dataA = rows.map(function(row) {
      return {
        x: row[POINT_XA],
        y: row[POINT_YA],
        name: row[POINT_NAMEA],
      }
    })

    //create the chart
    var ctx = document.getElementById('youtube-views-by-video').getContext('2d');

    const youtubeChart = Chart.Scatter(ctx, {
      data: scatterChartData,
      options: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: TITLE,
          fontFamily: "TrebuchetMS",
          fontSize: 24,
          fontColor: 'rgb(0, 0, 0)',
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: X_AXIS,
              fontColor: "black",
              fontSize: 14,
            },
            gridLines: {
              display: SHOW_GRID,
            },
            ticks: { // creating text string that appears in tooltips: label for no. of streams
              callback: function(value, index, values) {
                return POINT_X_PREFIX + value.toLocaleString() + POINT_X_POSTFIX;
              },
                fontColor: "black",
            },
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: Y_AXIS,
              fontColor: "black",
              fontSize: 14,
              
            },
            gridLines: {
              display: SHOW_GRID,
            },
            ticks: { // creating text string that appears in tooltips: label for daily increases
              callback: function(value, index, values) {
                return POINT_Y_PREFIX + value.toLocaleString() + POINT_Y_POSTFIX;
              },
              fontColor: "black",
            }
          }]
        },
        tooltips: { 
          displayColors: false,
          callbacks: {
            title: function(tooltipItem, all) { //adds the tooltips for the MV name
              return [ 
                all.datasets[tooltipItem[0].datasetIndex].data[tooltipItem[0].index].name,
              ]
            },
            label: function(tooltipItem, all) { //adds the tooltips for streams and daily increases
              return [
                X_AXIS + ': ' + POINT_X_PREFIX + tooltipItem.xLabel.toLocaleString() + POINT_X_POSTFIX,
                Y_AXIS + ': ' + POINT_Y_PREFIX + tooltipItem.yLabel.toLocaleString() + POINT_Y_POSTFIX,
              ]
            }
          }
        }
      }
    });

      // function that allows button to toggle the chart between various views of the dataset
      function youtubeChartAll() {
        youtubeChart.data.datasets[0].data = data; //change the data set to all Groups. [0] as there is only 1 dataset
        youtubeChart.update(); 
      };
      document.getElementById("youtubeAll").addEventListener("click",youtubeChartAll);
      
      function youtubeChartF() {
        youtubeChart.data.datasets[0].data = dataF; //change the data set to Female Groups
        youtubeChart.update(); 
      };
      document.getElementById("youtubeF").addEventListener("click",youtubeChartF);
      
      function youtubeChartM() {
        youtubeChart.data.datasets[0].data = dataM; //change the data set to Male Groups
        youtubeChart.update(); 
      };
      document.getElementById("youtubeM").addEventListener("click",youtubeChartM);

      function youtubeChartAverage() {
        youtubeChart.data.datasets[0].data = dataA; //change the data set to Averages
        youtubeChart.update(); 
      };
      document.getElementById("youtubeAvg").addEventListener("click",youtubeChartAverage);

  });

});

// -- Brand Reputation Bar Chart -- 

// creating datasets
const labelGroup = ["NewJeans","BTS","BLACKPINK","IVE","EXO","SEVENTEEN","LE SSERAFIM","H1-KEY","BIGBANG","(G)-DILE","NCT","aespa","Girls' Generation","STAYC","TWICE","Red Velvet","Oh My Girl","fromis_9","Highlight","Kep1er","MAMAMOO","Davichi","Bolbbalgan4"]
const brandReputation = [8878566,5788628,4957605,3354622,3217040,2934942,2869532,2662593,2319593,2221366,1862797,1611671,1504997,1408944,1238475,1060125,919065,752613,743108,695101,552046,329890,261465];

//create data object
const dataObjBrandRep = {
  labels: labelGroup,
  datasets: [
      {
          label: "Brand Reputation Score",
          //data: ,// uncomment this line and set this to beingOld
          data: brandReputation,
          borderWidth: 2,
          backgroundColor: ["red","#0047AB","red","red","#0047AB","#0047AB","red","red","#0047AB","red","#0047AB","red","red","red","red","red","red","red","#0047AB","red","red","red","red"],
          //borderColor: "hsla(100,100%,50%,1)",
      }
  ]
}
//construct chart
new Chart("brandRepChart",
            {
                type: "horizontalBar",
                data: dataObjBrandRep,
                options: { 
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: ['Kpop Groups with the Highest Brand Reputation Score in February 2023'],
                        fontFamily: "TrebuchetMS",
                        fontSize: 24,
                        fontColor: 'rgb(0,0,0)',
                    },
                    scales : {
                      yAxes:[{
                          ticks:{
                              fontColor: "black",
                              fontSize: 13,
                          }
                      }],
                      xAxes:[{
                        ticks:{
                          fontColor: "black",
                          fontSize: 13,
                        },
                    }],
                  },
                    
                }
            });

// -- Comparing Top 5 (by Brand Rep of Male and Female Groups) --


// -- Radar Chart to compare Top 5 (by Brand Rep Male and Female Groups) --

// construct data obejct for default radar chart. 1 dataset for each group (total 10)
const dataObjDomain = {
  labels: [
    'Group Age',
    'Brand Reputation Score',
    'Total YouTube Views',
    'Peak YouTube Viewership',
    'Best Album Sales (Korea)',
  ],
  datasets:[{
    label:'NewJeans',
    data:[5.89,100,19.55,16.7,25.71],
    fill: true,
    backgroundColor: 'rgb(0, 139, 139, 0.4)',
    pointBackgroundColor: 'rgb(0,139,139)',
    pointBorderColor: 'rgb(0,139,139)',
    //pointHoverBackgroundColor: '',
    pointHoverBorderColor: 'rgb(255, 255, 255)',
    pointRadius: 5,
    pointHoverRadius: 7, // point enlarges when mouse hovers over
    borderColor: 'rgb(0,139,139,0.7)',
    hidden: false, //set to false so that everything shows by default on page load, and can be changed to hidden when button is pressed
  },{
    label:'BLACKPINK',
    data:[41.18,55.84,94.94,100,53.80],
    fill: true,
    backgroundColor: 'rgb(199,21,133,0.4)',
    pointBackgroundColor: 'rgb(199,21,133)',
    pointBorderColor: 'rgb(199,21,133)',
    //pointHoverBackgroundColor: '',
    pointHoverBorderColor: 'rgb(255, 255, 255)',
    pointRadius: 5,
    pointHoverRadius: 7,
    borderColor: 'rgb(199,21,133,0.7)',
    hidden: false, //set to false so that everything shows by default on page load, and can be changed to hidden when button is pressed
  },{
    label:'IVE',
    data:[11.76,37.78,18.28,27.76,33.78],
    fill: true,
    backgroundColor: 'rgb(255,69,0, 0.4)',
    pointBackgroundColor: 'rgb(255,69,0)',
    pointBorderColor: 'rgb(255,69,0)',
    //pointHoverBackgroundColor: '',
    pointHoverBorderColor: 'rgb(255,69,0)',
    pointRadius: 5,
    pointHoverRadius: 7,
    borderColor: 'rgb(255,69,0,0.7)',
    hidden: false, //set to false so that everything shows by default on page load, and can be changed to hidden when button is pressed
  },{
    label:'LE SSERAFIM',
    data:[5.88,32.32,13.71,6.15,21.37],
    fill: true,
    backgroundColor: 'rgb(0,0,128, 0.4)',
    pointBackgroundColor: 'rgb(0,0,128)',
    pointBorderColor: 'rgb(0,0,128)',
    //pointHoverBackgroundColor: '',
    pointHoverBorderColor: 'rgb(255, 255, 255)',
    pointRadius: 5,
    pointHoverRadius: 7,
    borderColor: 'rgb(0,0,128,0.7)',
    hidden: false,  //set to false so that everything shows by default on page load, and can be changed to hidden when button is pressed
  },{
    label:'H1-KEY',
    data:[5.88,30.0,0.52,2.59,0.82],
    fill: true,
    backgroundColor: 'rgb(186, 0, 0, 0.4)',
    pointBackgroundColor: 'rgb(186, 0, 0)',
    pointBorderColor: 'rgb(186,0,0)',
    //pointHoverBackgroundColor: '',
    pointHoverBorderColor: 'rgb(255, 255, 255)',
    pointRadius: 5,
    pointHoverRadius: 7,
    borderColor: 'rgb(186,0,0,0.7)',
    hidden: false, //set to false so that everything shows by default on page load, and can be changed to hidden when button is pressed
  },{
    label:'BTS',
    data:[58.82,65.20,100,83.4,100],
    fill: true,
    backgroundColor: 'rgb(75,0,130, 0.4)',
    pointBackgroundColor: 'rgb(75,0,130)',
    pointBorderColor: 'rgb(75,0,130)',
    //pointHoverBackgroundColor: '',
    pointHoverBorderColor: 'rgb(255, 255, 255)',
    pointRadius: 5,
    pointHoverRadius: 7,
    borderColor: 'rgb(75,0,130,0.7)',
    hidden: false, //set to false so that everything shows by default on page load, and can be changed to hidden when button is pressed
  },{
    label:'EXO',
    data:[64.71,36.23,6.44,1.59,28.9],
    fill: true,
    backgroundColor: 'rgb(255,250,205, 0.5)',
    pointBackgroundColor: 'rgb(255,250,205)',
    pointBorderColor: 'rgb(255,250,205)',
    //pointHoverBackgroundColor: '',
    pointHoverBorderColor: 'rgb(255, 255, 255)',
    pointRadius: 5,
    pointHoverRadius: 7,
    borderColor: 'rgb(255,250,205,0.7)',
    hidden: false, //set to false so that everything shows by default on page load, and can be changed to hidden when button is pressed
  },{
    label:'SEVENTEEN',
    data:[47.06,33.06,17.44,22.64,71.88],
    fill: true,
    backgroundColor: 'rgb(100,149,237, 0.4)',
    pointBackgroundColor: 'rgb(100,149,237)',
    pointBorderColor: 'rgb(100,149,237)',
    //pointHoverBackgroundColor: '',
    pointHoverBorderColor: 'rgb(255,255,255)',
    pointRadius: 5,
    pointHoverRadius: 7,
    borderColor: 'rgb(100,149,237,0.7)',
    hidden: false, //set to false so that everything shows by default on page load, and can be changed to hidden when button is pressed
  },{
    label:'BIGBANG',
    data:[100,26.13,10.21,1.53,5.31],
    fill: true,
    backgroundColor: 'rgb(0,128,0, 0.4)',
    pointBackgroundColor: 'rgb(0,128,0)',
    pointBorderColor: 'rgb(0,128,0)',
    //pointHoverBackgroundColor: '',
    pointHoverBorderColor: 'rgb(255,255,255)',
    pointRadius: 5,
    pointHoverRadius: 7,
    borderColor: 'rgb(0,128,0,0.7)',
    hidden: false, //set to false so that everything shows by default on page load, and can be changed to hidden when button is pressed
  },{
    label:'NCT Dream',
    data:[41.18,20.98,10.37,34.34,43.40],
    fill: true,
    backgroundColor: 'rgb(255,215,0, 0.4)',
    pointBackgroundColor: 'rgb(255,215,0)',
    pointBorderColor: 'rgb(255,215,0)',
    //pointHoverBackgroundColor: '',
    pointHoverBorderColor: 'rgb(255, 255, 255)',
    pointRadius: 5,
    pointHoverRadius: 7,
    borderColor: 'rgb(255,215,0,0.7)',
    hidden: false, //set to false so that everything shows by default on page load, and can be changed to hidden when button is pressed
  }
]};
// construct the radar chart
const domainChart = new Chart("domainChart",
            {
                type: "radar",
                data: dataObjDomain,
                options: { 
                  tooltips: {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItem, data) {  // the values for each label were not showing in the tooltip, so I learnt how to fix it using code from this source: https://github.com/chartjs/Chart.js/issues/6188
                            return data.datasets[tooltipItem.datasetIndex].label + ' : ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        }
                    }
                },
                  elements: {
                    line:{borderWidth: 4, //of the coloured area formed by points of each dataset
                    //borderColor: 'rgb(0,0,0,0.7)'
                  }
                  },
                  maintainAspectRatio: false,
                  legend: {
                    display: true,  
                    labels:{
                      fontColor: 'black',
                    }
                      },
                  
                  title: {
                    display: true,
                    text: ['Domain Comparisons of Kpop Groups with Top Brand Reputation Scores'],
                    fontFamily: "TrebuchetMS",
                    fontSize: 24,
                    fontColor: 'rgb(0, 0, 0)',
                      },
                  scale : {
                      ticks: {
                        fontSize: 25,
                        fontColor: 'red',
                        display: false,
                        beginAtZero: true,
                        suggestedMax: 100,
                      },
                      gridLines: { //styling  lines of radar chart (the grid design)
                        lineWidth: 2,
                        color: "black"
                      },
                      angleLines: { // styling lines of radar chart (lines that points are on)
                        lineWidth: 2,
                        color: "black" 
                      },
                      pointLabels: { // styling labels of the 5 domains
                        fontSize: 12.5,
                        fontStyle: "bold",
                        fontColor: 'black',
                      }
                      },
                }
            });

// set of functions to toggle radar chart view + toggle information that is shown
let domainCounter = 0; // domain counter will take values from 0-10, with 0 being all groups shown and each group taking one number from 1-10 each
groupDomainInfo = document.getElementById("groupDomainInfo"); // to easily access div to change text in each function

//dataset no. 0-4 are the female groups, 5-9 are the male groups
// assign each group, and the other toggle options, one domainCounter value each, to cycle to them when button is pressed

    // buttons for individual groups: 
    function domainNCT(){  
      if (domainCounter != 9) { 
      for (let i = 0; i < 9; i++) {domainChart.data.datasets[i].hidden=true}; 
      domainChart.data.datasets[9].hidden=false;
        domainCounter = 9; 
        groupDomainInfo.innerHTML = "<strong>Age in 2023:</strong> <u>7</u> <br> <strong>Brand Reputation Index:</strong> <u>1,862,797</u> <br> <strong>Total Youtube Views:</strong> <u>0.737bn</u> <br> <strong>Peak Monthly Youtube Views:</strong> <u>36.18mil</u> <br> <strong>Best selling album:</strong> <u>'Hot Sauce'</u> <br> <strong>Best album sales:</strong> <u>2,183,437 </u>";
      } else {
        domainCounter = 0;
        for (let i = 0; i < 10; i++) {domainChart.data.datasets[i].hidden=false;}
        groupDomainInfo.innerHTML = "Click to find out more about each group!";
      }
      domainChart.update();
    }
    document.getElementById("buttonNCT").addEventListener("click",domainNCT);

    function domainBB(){
      if (domainCounter != 8) {
        for (let i = 0; i < 8; i++) {domainChart.data.datasets[i].hidden=true};
        for (let i = 9; i<10 ; i++) {domainChart.data.datasets[i].hidden=true};
        domainChart.data.datasets[8].hidden=false;
          domainCounter = 8
          groupDomainInfo.innerHTML = "<strong>Age in 2023:</strong> <u>17</u> <br> <strong>Brand Reputation Index:</strong> <u>2,319,593</u> <br> <strong>Total Youtube Views:</strong> <u>0.726bn</u> <br> <strong>Peak Monthly Youtube Views:</strong> <u>1.6mil</u> <br> <strong>Best selling album:</strong> <u>'Made'</u> <br> <strong>Best album sales:</strong> <u>266,982 </u>";
        } else {
          domainCounter = 0;
          for (let i = 0; i < 10; i++) {
            domainChart.data.datasets[i].hidden=false;};
            groupDomainInfo.innerHTML = "Click to find out more about each group!";

        }
        domainChart.update();
    }
    document.getElementById("buttonBB").addEventListener("click",domainBB);

    function domainSVT(){
      if (domainCounter != 7) {
        for (let i = 0; i < 7; i++) {domainChart.data.datasets[i].hidden=true};
        for (let i = 8; i<10 ; i++) {domainChart.data.datasets[i].hidden=true};
        domainChart.data.datasets[7].hidden=false;
          domainCounter = 7
          groupDomainInfo.innerHTML = "<strong>Age in 2023:</strong> <u>8</u> <br> <strong>Brand Reputation Index:</strong> <u>2,934,942</u> <br> <strong>Total Youtube Views:</strong> <u>1.24bn</u> <br> <strong>Peak Monthly Youtube Views:</strong> <u>23.8mil</u> <br> <strong>Best selling album:</strong> <u>'Face the Sun'</u> <br> <strong>Best album sales:</strong> <u>3,616,657 </u>";

        } else {
          domainCounter = 0;
          for (let i = 0; i < 10; i++) {
            domainChart.data.datasets[i].hidden=false;};
            groupDomainInfo.innerHTML = "Click to find out more about each group!";

        }
        domainChart.update();
    }
    document.getElementById("buttonSVT").addEventListener("click",domainSVT);

    function domainEXO(){
      if (domainCounter != 6) {
        for (let i = 0; i < 6; i++) {domainChart.data.datasets[i].hidden=true};
        for (let i = 7; i<10 ; i++) {domainChart.data.datasets[i].hidden=true};
        domainChart.data.datasets[6].hidden=false;
          domainCounter = 6
          groupDomainInfo.innerHTML = "<strong>Age in 2023:</strong> <u>11</u> <br> <strong>Brand Reputation Index:</strong> <u>3,217,040</u> <br> <strong>Total Youtube Views:</strong> <u>0.458bn</u> <br> <strong>Peak Monthly Youtube Views:</strong> <u>1.69mil</u> <br> <strong>Best selling album:</strong> <u>'Don't Mess Up My Tempo'</u> <br> <strong>Best album sales:</strong> <u>1,454,176 </u>";
        } else {
          domainCounter = 0;
          for (let i = 0; i < 10; i++) {
            domainChart.data.datasets[i].hidden=false;};
            groupDomainInfo.innerHTML = "Click to find out more about each group!";

        }
        domainChart.update();
    }
    document.getElementById("buttonEXO").addEventListener("click",domainEXO);

    function domainBTS(){
      if (domainCounter != 5) {
        for (let i = 0; i < 5; i++) {domainChart.data.datasets[i].hidden=true};
        for (let i = 6; i<10 ; i++) {domainChart.data.datasets[i].hidden=true};
        domainChart.data.datasets[5].hidden=false;
          domainCounter = 5
          groupDomainInfo.innerHTML = "<strong>Age in 2023:</strong> <u>10</u> <br> <strong>Brand Reputation Index:</strong> <u>5,788,628</u> <br> <strong>Total Youtube Views:</strong> <u>7.11bn</u> <br> <strong>Peak Monthly Youtube Views:</strong> <u>87.8mil</u> <br> <strong>Best selling album:</strong> <u>'Map of the Soul: 7'</u> <br> <strong>Best album sales:</strong> <u>5,031,377 </u>";
        } else {
          domainCounter = 0;
          for (let i = 0; i < 10; i++) {
            domainChart.data.datasets[i].hidden=false;};
            groupDomainInfo.innerHTML = "Click to find out more about each group!";

        }
        domainChart.update();
    }
    document.getElementById("buttonBTS").addEventListener("click",domainBTS);

    function domainH1(){
      if (domainCounter != 4) {
        for (let i = 0; i < 4; i++) {domainChart.data.datasets[i].hidden=true};
        for (let i = 5; i<10 ; i++) {domainChart.data.datasets[i].hidden=true};
        domainChart.data.datasets[4].hidden=false;
          domainCounter = 4
          groupDomainInfo.innerHTML = "<strong>Age in 2023:</strong> <u>1</u> <br> <strong>Brand Reputation Index:</strong> <u>2,662,593</u> <br> <strong>Total Youtube Views:</strong> <u>0.0372bn</u> <br> <strong>Peak Monthly Youtube Views:</strong> <u>2.72mil</u> <br> <strong>Best selling album:</strong> <u>'Rose Blossom'</u> <br> <strong>Best album sales:</strong> <u>41,153 </u>";

        } else {
          domainCounter = 0;
          for (let i = 0; i < 10; i++) {
            domainChart.data.datasets[i].hidden=false;};
            groupDomainInfo.innerHTML = "Click to find out more about each group!";

        }
        domainChart.update();
    }
    document.getElementById("buttonH1").addEventListener("click",domainH1);

    function domainLS(){
      if (domainCounter != 3) {
        for (let i = 0; i < 3; i++) {domainChart.data.datasets[i].hidden=true};
        for (let i = 4; i<10 ; i++) {domainChart.data.datasets[i].hidden=true};
        domainChart.data.datasets[3].hidden=false;
          domainCounter = 3
          groupDomainInfo.innerHTML = "<strong>Age in 2023:</strong> <u>1</u> <br> <strong>Brand Reputation Index:</strong> <u>2,869,532</u> <br> <strong>Total Youtube Views:</strong> <u>0.975bn</u> <br> <strong>Peak Monthly Youtube Views:</strong> <u>6.48mil</u> <br> <strong>Best selling album:</strong> <u>'Antifragile'</u> <br> <strong>Best album sales:</strong> <u>1,075,258 </u>";

        } else {
          domainCounter = 0;
          for (let i = 0; i < 10; i++) {
            domainChart.data.datasets[i].hidden=false;};
            groupDomainInfo.innerHTML = "Click to find out more about each group!";

        }
        domainChart.update();
    }
    document.getElementById("buttonLS").addEventListener("click",domainLS);

    function domainIVE(){
      if (domainCounter != 2) {
        for (let i = 0; i < 2; i++) {domainChart.data.datasets[i].hidden=true};
        for (let i = 3; i<10 ; i++) {domainChart.data.datasets[i].hidden=true};
        domainChart.data.datasets[2].hidden=false;
          domainCounter = 2
          groupDomainInfo.innerHTML = "<strong>Age in 2023:</strong> <u>2</u> <br> <strong>Brand Reputation Index:</strong> <u>3,354,622</u> <br> <strong>Total Youtube Views:</strong> <u>1.3bn</u> <br> <strong>Peak Monthly Youtube Views:</strong> <u>29.2mil</u> <br> <strong>Best selling album:</strong> <u>'After Like'</u> <br> <strong>Best album sales:</strong> <u>1,699,839 </u>";

        } else {
          domainCounter = 0;
          for (let i = 0; i < 10; i++) {
            domainChart.data.datasets[i].hidden=false;};
            groupDomainInfo.innerHTML = "Click to find out more about each group!";

        }
        domainChart.update();
    }
    document.getElementById("buttonIVE").addEventListener("click",domainIVE);

    function domainBP(){
      if (domainCounter != 1) {
        for (let i = 0; i < 1; i++) {domainChart.data.datasets[i].hidden=true};
        for (let i = 2; i<10 ; i++) {domainChart.data.datasets[i].hidden=true};
        domainChart.data.datasets[1].hidden=false;
          domainCounter = 1
          groupDomainInfo.innerHTML = "<strong>Age in 2023:</strong> <u>7</u> <br> <strong>Brand Reputation Index:</strong> <u>4,957,605</u> <br> <strong>Total Youtube Views:</strong> <u>6.75bn</u> <br> <strong>Peak Monthly Youtube Views:</strong> <u>105.3mil</u> <br> <strong>Best selling album:</strong> <u>'Born Pink'</u> <br> <strong>Best album sales:</strong> <u>2,706,751 </u>";

        } else {
          domainCounter = 0;
          for (let i = 0; i < 10; i++) {
            domainChart.data.datasets[i].hidden=false;};
            groupDomainInfo.innerHTML = "Click to find out more about each group!";

        }
        domainChart.update();
    }
    document.getElementById("buttonBP").addEventListener("click",domainBP);

    function domainNJ(){
      if (domainCounter != 10) {
        for (let i = 1; i<10 ; i++) {domainChart.data.datasets[i].hidden=true};
        domainChart.data.datasets[0].hidden=false;
          domainCounter = 10
          groupDomainInfo.innerHTML = "<strong>Age in 2023:</strong> <u>1</u> <br> <strong>Brand Reputation Index:</strong> <u>8,878,566</u> <br> <strong>Total Youtube Views:</strong> <u>1.39bn</u> <br> <strong>Peak Monthly Youtube Views:</strong> <u>16.7mil</u> <br> <strong>Best selling album:</strong> <u>'New Jeans'</u> <br> <strong>Best album sales:</strong> <u>1,293,600 </u>";
        } else {
          domainCounter = 0;
          for (let i = 0; i < 10; i++) {
            domainChart.data.datasets[i].hidden=false;};
            groupDomainInfo.innerHTML = "Click to find out more about each group!";

        }
        domainChart.update();
    }
    document.getElementById("buttonNJ").addEventListener("click",domainNJ);

    //buttons to generate average statistics for male and female groups + show all male/female group's datasets:
    function domainMale(){
      if (domainCounter != 11) {
        for (let i = 5; i<10 ; i++) {domainChart.data.datasets[i].hidden=false};
        for (let i = 0; i<5 ; i++) {domainChart.data.datasets[i].hidden=true};
          domainCounter = 11
          groupDomainInfo.innerHTML = "<strong><u>Average statistics of Male Groups</u></strong> <br> <strong>Age in 2023:</strong> <u>10.6</u> <br> <strong>Brand Reputation Index:</strong> <u>3,224,600</u> <br> <strong>Total Youtube Views:</strong> <u>2.054bn</u> <br> <strong>Peak Monthly Youtube Views:</strong> <u>30.23mil</u> <br> <strong>Best album sales:</strong> <u>2,510,526 </u>";
        } else {
          domainCounter = 0;
          for (let i = 0; i < 10; i++) {
            domainChart.data.datasets[i].hidden=false;};
            groupDomainInfo.innerHTML = "Click to find out more about each group!";

        };
        domainChart.update();
    }
    document.getElementById("buttonMaleDomain").addEventListener("click",domainMale);
    
    function domainFemale(){
      if (domainCounter != 12) {
        for (let i = 5; i<10 ; i++) {domainChart.data.datasets[i].hidden=true};
        for (let i = 0; i<5 ; i++) {domainChart.data.datasets[i].hidden=false};
          domainCounter = 12
          groupDomainInfo.innerHTML = "<strong><u>Average statistics of Female Groups</u></strong> <br> <strong>Age in 2023:</strong> <u>2.4</u> <br> <strong>Brand Reputation Index:</strong> <u>4,544,584</u> <br> <strong>Total Youtube Views:</strong> <u>2.09bn</u> <br> <strong>Peak Monthly Youtube Views:</strong> <u>32.28mil</u> <br> <strong>Best album sales:</strong> <u>1,363320 </u>";
        } else {
          domainCounter = 0;
          for (let i = 0; i < 10; i++) {
            domainChart.data.datasets[i].hidden=false;};
            groupDomainInfo.innerHTML = "Click to find out more about each group!";

        }
        domainChart.update();
    }
    document.getElementById("buttonFemaleDomain").addEventListener("click",domainFemale);
