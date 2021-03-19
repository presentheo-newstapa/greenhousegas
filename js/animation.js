// 인트로 부분 애니메이션 적용
const introText = document.querySelectorAll('.intro-text');
const introTitle = document.querySelectorAll('.intro-title')[0];

const number = document.getElementById('NUMBER')

let animationTimeline = anime.timeline({
  easing: 'easeOutExpo',
})

animationTimeline.add({
  targets: introText[0],
  translateX: 0,
  opacity: 1,
  duration: 700,
})
.add({
  targets: introText[1],
  translateX: 0,
  opacity: 1,
  duration: 700,
})
.add({
  targets: introText[2],
  translateX: 0,
  opacity: 1,
  duration: 700,
})
.add({
  targets: introTitle,
  translateX: 0,
  opacity: 1,
  duration: 500,
})

// 숫자 세기
let foo = document.querySelectorAll('.spec')[0]
let foo2 = document.querySelectorAll('.spec')[1]
let foo3 = document.querySelectorAll('.spec')[2]
let foo4 = document.querySelectorAll('.spec')[3]

var numAnim = new countUp.CountUp(foo, 566814400, {
  duration: 3
});
numAnim.start()

var numAnim2 = new countUp.CountUp(foo2, 566814400*29126, {
  duration: 3
});
numAnim2.start()

var numAnim3 = new countUp.CountUp(foo3, 15597444142176, {
  duration: 3
});
numAnim3.start()

var numAnim4 = new countUp.CountUp(foo4, 15597444142176, {
  duration: 3
});
numAnim4.start()