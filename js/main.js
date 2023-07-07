'use strict';

// gsap.to(요소, 시간, 옵션)
// // 또는
// TweenMax.to(요소, 시간, 옵션)

// gsap.to(window, .7, {
//   scrollTo: 0
// });


// new Swiper(요소, 옵션);

// new Swiper('.swiper-container', {
//   direction: 'vertical', // 수직 슬라이드
//   autoplay: true, // 자동 재생 여부
//   loop: true // 반복 재생 여부
// });

// new ScrollMagic
//   .Scene({ // 감시할 장면(Scene)을 추가
//     triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
//     triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
//   })
//   .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
//   .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)

//   // 범위 랜덤 함수(소수점 2자리까지)
// function random(min, max) {
//   // `.toFixed()`를 통해 반환된 문자 데이터를,
//   // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
//   return parseFloat((Math.random() * (max - min) + min).toFixed(2))
// }

// SEARCH
const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색')
});
searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','')
});


// BADGE
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 500){
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
  }
},200))


// VISUAL
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1,{
    delay: (index + 1) * .7,
    opacity: 1
  })
});


