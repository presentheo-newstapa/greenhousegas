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
  duration: 1,
})
.add({
  targets: introText[1],
  translateX: 0,
  opacity: 1,
  duration: 1,
})
.add({
  targets: introText[2],
  translateX: 0,
  opacity: 1,
  duration: 1,
})
.add({
  targets: introTitle,
  translateX: 0,
  opacity: 1,
  duration: 1,
})

// 숫자 세기
let foo = document.querySelectorAll('.spec')[0]
let foo2 = document.querySelectorAll('.spec')[1]
let foo3 = document.querySelectorAll('.spec')[3]

var numAnim = new countUp.CountUp(foo, 80597292, {
  duration: 3
});
numAnim.start()

var numAnim2 = new countUp.CountUp(foo2, 170764602086, {
  duration: 3
});
numAnim2.start()

var numAnim3 = new countUp.CountUp(foo3, 1707646286, {
  duration: 3
});
numAnim3.start()