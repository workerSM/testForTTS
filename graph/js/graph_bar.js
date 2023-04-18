

const myChart = new Chart("myChart", {
    type: "bar",
    data: {},
    options: {}
});

var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,  //bar에선 작동안됨. 
      backgroundColor: barColors,
      data: [
        {x: 'name tag 1', y: 30},
        {x: 'name tag 2', y: 20},
        {x: 'name tag 3', y: 25}
      ],
      borderWidth : 1,  //바 자체의 border 두께
    }]
  },
  options: {
    legend: {display: true},
    title: {
      display: true,
      text: "World Wine Production 2018"
    },
    scales: {
      x: {
        grid: {
          // offset: false
        }
      },
      y: {
        beginAtZero: true
      }
    }
  }
});