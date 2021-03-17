let dataSet2 = [
    {
      name: 'posco',
      caption: '포스코',
      description: "2021년 예산안에는 전년도 예산 150억원 대비 150억원 (100.0%) 증액된 300억원이 편성되었다.",
      cost: 2176712124706,
      direction: false,
    },
    {
      name: 'samsung',
      caption: '삼성전자',
      description: "2021년 예산안에는 전년도 예산 150억원 대비 150억원 (100.0%) 증액된 300억원이 편성되었다.",
      cost: 327640092434,
      direction: false,
    },
    {
      name: 'skhynix',
      caption: 'SK하이닉스',
      description: "5년 평균 보전액 ₩4,824,945,426",
      cost: 151771158848,
      direction: false,
    },
    {
      name: 'hanhwa',
      caption: '한화솔루션',
      description: "5년 평균 보전액 ₩4,824,945,426",
      cost: 86284959472,
      direction: false,
    },
    {
      name: 'goldstar',
      caption: 'LG전자',
      description: "5년 평균 보전액 ₩5,832,351,124",
      cost: 36262918536,
      direction: false,
    },
    {
      // name: 'sunpower',
      name: 'schoolbus',
      caption: '전기자동차 지원금',
      description: "총 사업비 600억원을 투자해 25.2㎿급 풍력발전단지를 조성할 계획이다.",
      cost: 1119584000000,
      direction: true,
    },
    {
      // name: 'sunpower',
      name: 'schoolbus',
      caption: '태양광 발전단지 건설',
      description: "총 사업비 600억원을 투자해 25.2㎿급 풍력발전단지를 조성할 계획이다.",
      cost: 28700000000,
      direction: true,
    },
    {
      // name: 'windpower',
      name: 'schoolbus',
      caption: '풍력발전단지 건설',
      description: "총 사업비 600억원을 투자해 25.2㎿급 풍력발전단지를 조성할 계획이다.",
      cost: 59800000000,
      direction: true,
    },
    {
      name: 'schoolbus',
      caption: '어린이 통학차량 LPG차 전환',
      description: "어린이통학차량 LPG차 전환지원 사업은 어린이집이나 유치원, 초등학교 및 학 원.체육시설 등에서 통학차량으로 사용되고 있는 경유차의 LPG차 전환을 유도함으 로써 대기오염물질로부터 어린이의 건강을 보호하고 미세먼지 저감에 기여하는 것을 목적으로 하는 사업",
      cost: 30000000000,
      direction: true,
    },
    {
      name: 'hydrostation',
      caption: '수소충전소 설치',
      description: "수소연료전지자동차의 보급 활성화를 위한 구매 보 조금과 충전인프라 설치비용을 지원하는 사업",
      cost: 72000000000,
      direction: true,
    },
    {
      // name: 'recycle',
      name: 'schoolbus',
      caption: '재활용품 비축사업',
      description: "재활용품 비축사업은 폐비닐, 폐지, 유리병 등 재활용원료로 사용되는 폐기물이 재활용시장의 수급불균형 등으로 인해 민간의 재활용업체로부터 수거되지 않고 적체 될 우려가 있을 경우 이를 비축하기 위한 시설을 구축함으로써 재활용품의 수급을 조 절하고 가격을 안정화시키는 것을 목적으로 하는 사업",
      cost: 26000000000,
      direction: true,
    },
    {
      // name: 'greenhousegas',
      name: 'schoolbus',
      caption: '온실가스관리 인프라 구축',
      description: "온실가스관리 인프라 구축 사업은 기후변화로 위협받는 지구와 인류의 지속가 능성 확보를 목적으로 세계 각국이 비준한 ‘기후변화협약’에 따라 설정된 온실가스 감축 목표 및 이를 달성하기 위해 마련된 온실가스 감축로드맵을 이행하기 위한 제도 운영 및 인프라 구축을 지원하는 사업",
      cost: 46900000000,
      direction: true,
    },
    {
      // name: 'youthjob',
      name: 'schoolbus',
      caption: '청년구직활동 지원',
      description: "국민취업지원제도 사업은 「구직자 취업촉진 및 생활안정지원에 관한 법률」(이 하 “「구직자취업촉진법」”)에 따라 도입된 ‘한국형 실업부조’로서 저소득 구직자, 청년 신규실업자, 경력단절여성 등 취업취약계층을 대상으로 생계지원과 취업지원서비스를 제공하는 단위사업이다",
      cost: 33500000000,
      direction: true,
    },
    {
      // name: 'seniorjob',
      name: 'schoolbus',
      caption: '중장년층 취업지원',
      description: "재취업지원서비스시행지원 사업1)은 근로자에게 재취업지원서비스를 제공하는 기 업을 지원하기 위한 컨설팅 및 교육 등을 지원하는 사업으로, 중장년층취업지원 사업 의 내역사업으로서 2021년도 예산안에 신규 도입되었다. 이 사업의 2021년도 예산 안은 52억 9,000만원을 편성하였다.",
      cost: 31100000000,
      direction: true,
    },
  ]
  


let nameData = []
let costData = []

dataSet2.map(function (e, i) {
    nameData.push(e.caption);
    costData.push(e.cost);
})
  
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: nameData,
        datasets: [{
            label: '금액',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: costData
        }]
    },

    // Configuration options go here
    options: {}
});