
// 이전버전 형식
// const myChart = new Chart("myChart", {
//     type: "bar",
//     data: {},
//     options: {}
// });

//chart.js ver2의 내용
const myChart = Chart.Bar("myChart", {
  data: {},
  options:{}
})

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
    scales: {
      yAxes: [{
        ticks: {
          min: 0
        }
      }]
    },
    legend: {display: true},
    title: {
      display: true,
      text: "World Wine Production 2018"
    },
    
  }
});



//npm으로 작동시키기 chart.js 버전 4
//bundle사이즈 상관없이 사용할때 auto를 통해 모든 feature사용가능
//import Chart from 'chart.js/auto';

//chart.js ver4의 내용
// (async function() {
//   const data = [
//     { year: 2010, count: 10 },
//     { year: 2011, count: 20 },
//     { year: 2012, count: 15 },
//     { year: 2013, count: 25 },
//     { year: 2014, count: 22 },
//     { year: 2015, count: 30 },
//     { year: 2016, count: 28 },
//   ];

//   new Chart(
//     document.getElementById('acquisitions'),
//     {
//       type: 'bar',
//       data: {
//         labels: data.map(row => row.year),
//         datasets: [
//           {
//             label: 'Acquisitions by year',
//             data: data.map(row => row.count)
//           }
//         ]
//       }
//     }
//   );
// })();