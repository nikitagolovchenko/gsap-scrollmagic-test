document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.btn');
  const tl = gsap.timeline();
  const controller = new ScrollMagic.Controller();

  btn.addEventListener('click', function () {
    document.body.classList.toggle('nav-open');
  })

  document.addEventListener('click', function (e) {
    if (e.target !== btn) {
      document.body.classList.remove('nav-open');
    }
  })

  tl.to('.overflow', {
      duration: 0.8,
      width: '100%',
      ease: "slow(0.7, 0.7, false)"
    })
    .to('.overflow', {
      duration: 0.7,
      left: '100%',
      autoAlpha: 0,
      ease: "slow(0.7, 0.7, false)"
    })
    .to('.decor', {
      duration: 1,
      height: '100%',
      stagger: 0.2,
      ease: "power4.out",
    }, '-=0.5')
    .to('.decor', {
      duration: 1,
      top: '100%',
      stagger: 0.2,
      ease: "power4.out",
    }, '-=0.8')
    .set('.decor', {
      autoAlpha: 0
    })
    .to('.bg-color', {
      duration: 0.3,
      autoAlpha: 0
    }, '-=0.5')
    .from('h3', {
      duration: 0.3,
      y: 200,
      opacity: 0,
      stagger: 0.2,
      ease: "back.out(1)"
    }, 'key1')
    .from('.card-body p', {
      duration: 0.3,
      delay: 0.1,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "back.out(1)"
    }, 'key1')
    .from('.link-more', {
      duration: 0.3,
      delay: 0.2,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "back.out(1))"
    }, 'key1')

  let scene = new ScrollMagic.Scene({
      triggerElement: "#card-wrap",
      triggerHook: 0.3,
      offset: 200,
      // duration: 3000
    })
    .setTween(tl)
    // .setPin("#card-wrap")
    .addIndicators({
      name: "1 (duration: 0)"
    })
    .addTo(controller);
})