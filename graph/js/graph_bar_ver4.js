// cdn으로 진행
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, [10,19], 3, 5, null, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3,
            fill: true,      //선 아래 영역 채우기 유무
            tension: 0,      //선의 곡선정도
            pointBorderWidth: 5, //포인트 테두리두께
            pointRadius: 10,     //포인트 반지름크기 
            pointStyle: 'star',  //포인트 모양
            showLine: true,     //차트 선 유무
            spanGaps: false,      //true=데이터없거나 null에서 선이 그려짐. false=앞의 상황에서 줄끊김생김
            borderSkipped: 'top'    // 한 영역만 삭제가능

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
