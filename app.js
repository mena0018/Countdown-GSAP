window.addEventListener('load', initAnim);

function initAnim() {

   const TL = gsap.timeline({
      repeat: -1
   });

   TL
   .to('p', {autoAlpha: 1, y: 0, stagger: 1})
   .to('p', {autoAlpha: 0, y: -100, stagger: 1}, 1)
} 