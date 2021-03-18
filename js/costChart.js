let dataSet2 = [
  {
    name: 'posco',
    caption: '포스코',
    description: "2019년 배출권 할당량 2,176,712,124,706원",
    cost: 2176712,
    direction: false,
  },
  {
    name: 'samsung',
    caption: '삼성전자',
    description: "2021년 예산안에는 전년도 예산 150억원 대비 150억원 (100.0%) 증액된 300억원이 편성되었다.",
    cost: 327640,
    direction: false,
  },
  {
    name: 'skhynix',
    caption: 'SK하이닉스',
    description: "5년 평균 보전액 ₩4,824,945,426",
    cost: 151771,
    direction: false,
  },
  {
    name: 'hanhwa',
    caption: '한화솔루션',
    description: "5년 평균 보전액 ₩4,824,945,426",
    cost: 86284,
    direction: false,
  },
  {
    name: 'sunpower',
    caption: '태양광 발전단지 건설',
    description: "축구장 190개 면적에 100MW 규모의 태양광 발전단지 건설",
    cost: 344000,
    direction: true,
  },
  {
    name: 'windpower',
    caption: '풍력발전단지 건설',
    description: "풍력발전기 66개, 140MW 규모의 풍력 발전단지 건설",
    cost: 409700,
    direction: true,
  },
  {
    name: 'electriccar',
    caption: '전기자동차 지원금',
    description: "전기자동차 1대 구입 시 최대 1900만 원 보조금 지급",
    cost: 1119584,
    direction: true,
  },
  {
    name: 'hydrocar',
    caption: '수소자동차 지원금',
    description: "수소자동차 15,000대에 최대 3750만 원씩 보조금 지급",
    cost: 365500,
    direction: true,
  },
  {
    name: 'schoolbus',
    caption: '어린이 통학차량 LPG차 전환',
    description: "총 12,000대에 500만 원씩 지원금 지급",
    cost: 30000,
    direction: true,
  },
  {
    name: 'recycle',
    caption: '재활용품 비축사업',
    description: "폐비닐, 폐지, 유리병 등 재활용 폐기물 비축 시설 구축",
    cost: 26000,
    direction: true,
  },
  {
    name: 'youthjob',
    caption: '청년일자리창출지원',
    description: "청년디지털일자리 사업1)은 IT 활용가능 직무에 청년을 채용하는 중소 · 중견기업 에게 최대 6개월간 인건비를 지원하는 사업으로, 청년일자리창출지원의 내역사업이 다. 이 사업의 2021년도 예산안은 전년 추경예산 대비 935억 3,600만원이 감액된 4,676억원을 편성하였다.",
    cost: 467600,
    direction: true,
  },
  {
    name: 'seniorjob',
    caption: '국민취업지원제도',
    description: "저소득 구직자, 청년 신규실업자, 경력단절여성 등 취업취약계층을 대상으로 생계지원과 취업지원서비스 제공",
    cost: 1283019,
    direction: true,
  },
]

let nameData = []
let costData = []
let colorData = []

dataSet2.map(function (e, i) {
    nameData.push(e.caption);
    // costData.push(e.direction ? e.cost : e.cost*(-1));
    costData.push(e.cost);
    colorData.push(e.direction ? 'rgba(34,139,34, 0.7)' : 'rgba(255,159,64,1)');
})
  
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: nameData,
        datasets: [{
            label: '금액(백만 원)',
            backgroundColor: colorData,
            // borderColor: 'rgba(34,139,34, 1)',
            data: costData
        }]
    },

    // Configuration options go here
    options: {}
});