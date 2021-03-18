let dataSet2 = [
  {
    caption: '포스코',
    cost: 73121363,
    haldang: 74734331,
},
{
    caption: '삼성전자',
    cost: 11143405,
    haldang: 11249059,
  },
  {
    caption: 'SK하이닉스',
    cost: 4260022,
    haldang: 5210848,
  },
  {
    caption: '한화솔루션',
    cost: 2700861,
    haldang: 2962472,
  },
]

function randomScalingFactor(){return Math.floor(Math.random()*10)}

let nameData = []
let costData = []
let haldangData = []

dataSet2.map(function (e, i) {
    nameData.push(e.caption);
    costData.push(e.cost);
    haldangData.push(e.haldang);
})

var barChartData = {
    labels: nameData,
    datasets: [{
        label: '온실가스 배출량',
        backgroundColor: 'rgba(255,159,64,0.7)',
        data: costData,
    }, {
        label: '무상 배출권 할당량',
        backgroundColor: 'rgba(255,15,14,0.7)',
        data: haldangData,
    }]
};
  
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: barChartData,
    // options: {
    //     scales: {
    //         xAxes: [{
    //             stacked: true
    //         }],
    //         yAxes: [{
    //             stacked: true
    //         }]
    //     }
    // }
});