// chart js - cdn으로 진행
function makeChartDaily(){
    let chartLabel = '';
    let chartData = '';
    let chartLabels = '';
    var ctx1 = document.getElementById('myChartDaily');
    let selectOpt = document.querySelector('.option-area-daily input:checked');

    //https://www.chartjs.org/docs/latest/developers/updates.html
    // function addData(chart, label, data) {
    //     chart.data.labels.push(label);
    //     chart.data.datasets.forEach((dataset) => {
    //         dataset.data.push(data);
    //     });
    //     chart.update();
    // }

    //이전 데이터 없애기
    //https://velog.io/@damin1025/chart.js-%EA%B7%B8%EB%9E%98%ED%94%84-%EC%B4%88%EA%B8%B0%ED%99%94-destroy
    if (Chart.getChart(ctx1)) {
        Chart.getChart(ctx1)?.destroy();
    }
    //위와 동일한 의미
    // if (Chart.getChart(ctx1) === null 
    //     || Chart.getChart(ctx1) === undefined) { 
    // return; 
    // }
    // else { 
    // Chart.getChart(ctx1).destroy(); 
    // }

    if(selectOpt.value == "opt-daily-fall"){
        console.log('fall')
        chartLabel = '낙상';
        chartData = '12';   
        chartLabels = '낙상알림 총 횟수';
    }else if(selectOpt.value == "opt-daily-nomove"){
        console.log('nomove')
        chartLabel = '움직임없음';
        chartData = '5';  
        chartLabels = '움직임없음 총 횟수';
    }else if(selectOpt.value == "opt-daily-temp"){
        console.log('temp')
        chartLabel = '기온';
        chartData = '8','2';  
        chartLabels = '저온알림 총 건수','고온알림 총 건수';
    }else if(selectOpt.value == "opt-daily-walk"){
        chartLabel = '운동량';
        chartData = '1000','2000';
        chartLabels = '최소운동량','최대운동량';
        console.dir(chartLabels)
    }


   
    var myChartDaily = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: [chartLabels],   //x축 항목
            datasets: [{
                label: chartLabel,  // 범례
                data: [chartData],
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
                borderWidth: 5,
                fill: true,      //선 아래 영역 채우기 유무
                tension: 0,      //선의 곡선정도
                pointBorderWidth: 5, //포인트 테두리두께
                pointRadius: 10,     //포인트 반지름크기 
                pointStyle: 'star',  //포인트 모양
                showLine: true,     //차트 선 유무
                spanGaps: false,      //true=데이터없거나 null에서 선이 그려짐. false=앞의 상황에서 줄끊김생김
                borderSkipped: 'top',    // 한 영역만 삭제가능
                barThickness: 100
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
                    suggestedMin: 0,
                    suggestedMax: 20,
                    grid: {
                        offset: false,   //양 가장자리에 추가공간이 더해짐
                    },
                    ticks: {
                        stepSize: 2
                    }
                },
         
               
            }
        },
    });
    console.log(myChartDaily) 
}
makeChartDaily();



function makeChartWeekly(){
    let chartLabel = '';
    let chartData;
    let chartLabels = '';
    let ctx1 = document.getElementById('myChartWeekly');
    let selectOpt = document.querySelector('.option-area-weekly input:checked');

    let dataWeekly;
    let chartType;

    //이전 데이터 없애기
    if (Chart.getChart(ctx1)) {
        Chart.getChart(ctx1)?.destroy();
    }

    if(selectOpt.value == "opt-weekly-fall"){
        console.log('fall')
        chartType = 'line';
        chartLabel = '낙상';
        chartData = [12,5,6,6,21,5,13];
        chartLabels = '낙상알림 총 횟수';
        
        dataWeekly = {
            labels: ['월','화','수','목','금','토','일'],
            datasets: [{
                label: chartLabel,
                data: chartData,
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
                borderWidth: 5,
                fill: false,      //선 아래 영역 채우기 유무
                tension: 0,      //선의 곡선정도
                pointBorderWidth: 3, //포인트 테두리두께
                pointRadius: 10,     //포인트 반지름크기 
                pointStyle: 'circle',  //포인트 모양
                showLine: true,     //차트 선 유무
                spanGaps: false,      //true=데이터없거나 null에서 선이 그려짐. false=앞의 상황에서 줄끊김생김
                borderSkipped: 'top',    // 한 영역만 삭제가능
                hoverRadius: 10,
                hoverBorderWidth: 5
            }]
        }
    }else if(selectOpt.value == "opt-weekly-nomove"){
        console.log('nomove')
        chartType = 'line';
        chartLabel = '움직임없음';
        chartData = [10,9,8,7,6,5,10];  
        chartLabels = '움직임없음 총 횟수';

        dataWeekly = {
            labels: ['월','화','수','목','금','토','일'],
            datasets: [{
                label: chartLabel,
                data: chartData,
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
                borderWidth: 5,
                fill: false,      //선 아래 영역 채우기 유무
                tension: 0,      //선의 곡선정도
                pointBorderWidth: 3, //포인트 테두리두께
                pointRadius: 10,     //포인트 반지름크기 
                pointStyle: 'circle',  //포인트 모양
                showLine: true,     //차트 선 유무
                spanGaps: false,      //true=데이터없거나 null에서 선이 그려짐. false=앞의 상황에서 줄끊김생김
                borderSkipped: 'top',    // 한 영역만 삭제가능
                hoverRadius: 10,
                hoverBorderWidth: 5
            }]
        }
    }else if(selectOpt.value == "opt-weekly-temp"){
        console.log('temp')
        chartType = 'bar';
        dataWeekly = {
            labels: ['월','화','수','목','금','토','일'],
            datasets: [
                {
                    label: '최저온도',
                    data: [15,18,11,12,10,20,18]
                },
                {
                    label: '최고온도',
                    data: [18,18,15,16,15,22,20]
                },
            ],
        }
        
    }else if(selectOpt.value == "opt-weekly-walk"){
        chartType = 'bar';
        dataWeekly = {
            labels: ['월','화','수','목','금','토','일'],
            datasets: [
                {
                    label: '최소운동량',
                    data: [15,18,11,12,10,20,18]
                },
                {
                    label: '최대운동량',
                    data: [18,18,15,16,15,22,20]
                },
            ],
        }
    }


    //https://tech.toktokhan.dev/2021/07/20/start-chartjs/
    //https://www.chartjs.org/docs/latest/samples/area/line-datasets.html  


    var myChartWeekly = new Chart(ctx1, {
        type: chartType,
        data: dataWeekly,   
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
                },
            },
            myScale: {
                type: 'logarithmic',
                position: 'right', // `axis` is determined by the position as `'y'`
              }
        },
    });
    console.log(myChartWeekly)  
}
makeChartWeekly();


function makeChartMonthly(){
    let chartLabel = '';
    let chartData;
    let chartLabels = '';
    let ctx1 = document.getElementById('myChartMonthly');
    let selectOpt = document.querySelector('.option-area-monthly input:checked');

    let dataMonthly;
    let chartType;

    //이전 데이터 없애기
    if (Chart.getChart(ctx1)) {
        Chart.getChart(ctx1)?.destroy();
    }

    if(selectOpt.value == "opt-monthly-fall"){
        console.log('fall')
        chartType = 'line';
        chartLabel = '낙상';
        chartData = [12,5,6,10];
        chartLabels = '낙상알림 총 횟수';
        
        dataMonthly = {
            labels: ['1주','2주','3주','4주'],
            datasets: [{
                label: chartLabel,
                data: chartData,
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
                borderWidth: 5,
                fill: false,      //선 아래 영역 채우기 유무
                tension: 0,      //선의 곡선정도
                pointBorderWidth: 3, //포인트 테두리두께
                pointRadius: 10,     //포인트 반지름크기 
                pointStyle: 'circle',  //포인트 모양
                showLine: true,     //차트 선 유무
                spanGaps: false,      //true=데이터없거나 null에서 선이 그려짐. false=앞의 상황에서 줄끊김생김
                borderSkipped: 'top',    // 한 영역만 삭제가능
                hoverRadius: 10,
                hoverBorderWidth: 5
            }]
        }
    }else if(selectOpt.value == "opt-monthly-nomove"){
        console.log('nomove')
        chartType = 'line';
        chartLabel = '움직임없음';
        chartData = [10,9,8,7];  
        chartLabels = '움직임없음 총 횟수';

        dataMonthly = {
            labels: ['1주','2주','3주','4주'],
            datasets: [{
                label: chartLabel,
                data: chartData,
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
                borderWidth: 5,
                fill: false,      //선 아래 영역 채우기 유무
                tension: 0,      //선의 곡선정도
                pointBorderWidth: 3, //포인트 테두리두께
                pointRadius: 10,     //포인트 반지름크기 
                pointStyle: 'circle',  //포인트 모양
                showLine: true,     //차트 선 유무
                spanGaps: false,      //true=데이터없거나 null에서 선이 그려짐. false=앞의 상황에서 줄끊김생김
                borderSkipped: 'top',    // 한 영역만 삭제가능
                hoverRadius: 10,
                hoverBorderWidth: 5
            }]
        }
    }else if(selectOpt.value == "opt-monthly-temp"){
        console.log('temp')
        chartType = 'bar';
        dataMonthly = {
            labels: ['1주','2주','3주','4주'],
            datasets: [
                {
                    label: '최저온도',
                    data: [15,18,11,12]
                },
                {
                    label: '최고온도',
                    data: [18,18,15,16]
                },
            ],
        }
        
    }else if(selectOpt.value == "opt-monthly-walk"){
        chartType = 'bar';
        dataMonthly = {
            labels: ['1주','2주','3주','4주'],
            datasets: [
                {
                    label: '최소운동량',
                    data: [15,18,11,12]
                },
                {
                    label: '최대운동량',
                    data: [18,18,15,16]
                },
            ],
        }
    }


    //https://tech.toktokhan.dev/2021/07/20/start-chartjs/
    //https://www.chartjs.org/docs/latest/samples/area/line-datasets.html  


    var myChartMonthly = new Chart(ctx1, {
        type: chartType,
        data: dataMonthly,   
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
                },
            },
            myScale: {
                type: 'logarithmic',
                position: 'right', // `axis` is determined by the position as `'y'`
              }
        },
    });
    console.log(myChartMonthly)  
}
makeChartMonthly();

