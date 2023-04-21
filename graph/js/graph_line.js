// cdn으로 진행
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, null, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
            ],
            borderColor: [    //포인트들의 색상임
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderJoinStyle: 'miter',   //꺾이는 부분의 round정도(round,bevel,miter)
            borderWidth: 5,
            borderDash: [1,5,10,5],   //dash 형태일경우 선-띄우기-선-띄우기 간격에 대한 숫자
            borderDashOff: 0,
            fill: true,      //선 아래 영역 채우기 유무
            tension: 0,      //선의 곡선정도
            pointBorderWidth: 5, //포인트 테두리두께
            pointRadius: 10,     //포인트 반지름크기 
            pointStyle: 'star',  //포인트 모양
            showLine: true,     //차트 선 유무
            spanGaps: false,      //true=데이터없거나 null에서 선이 그려짐. false=앞의 상황에서 줄끊김생김

        }]
    },
    options: {
        indexAxis: 'x',     //차트 가로로 보기
        scales: {
            x: {
                grid: {
                    offset: false,   //양 가장자리에 추가공간이 더해짐
                }
            },
            y: {
                grid: {
                    offset: false,   //양 가장자리에 추가공간이 더해짐
                }
            }
        }
    }
});
