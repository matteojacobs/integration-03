
gsap.registerPlugin(ScrollTrigger);

const initHeroAnimations = () => {

  
  

  
  
  gsap.from(".hero__paragraph", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 1,
  });

  gsap.from(".hero__button", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "elastic.out(1, 0.5)",
    delay: 1.5,
  });

  gsap.from(".hero__title", {
    scale: 0,
    duration: 1.5,
    ease: "back.out(1.7)",
    delay: 0.5,
  });

  // Special letter animation
  gsap.from(".hero__title--specialLetter", {
    scale: 0,
    rotation: 360,
    duration: 1.5,
    ease: "back.out(1.7)",
    delay: 0.5,
  });
}

// Navigation animations
const initNavAnimations = () => {
  gsap.from(".navigation__item", {
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.1,
    delay: 0.5,
  });
}


  initHeroAnimations();
  initNavAnimations();




gsap.utils
  .toArray(".chapterI__section--1, .chapterI__section--2")
  .forEach((section) => {
    gsap.from(section, {
      opacity: 0.3,
      x: -20,
      duration: 1.5,
      scrollTrigger: {
        trigger: section,
        start: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
  });

// Animate paragraphs --3 and --4
gsap.utils
  .toArray(".chapterI__paragraph--3, .chapterI__paragraph--4")
  .forEach((paragraph) => {
    gsap.from(paragraph, {
      opacity: 0.3,
      x: -20,
      duration: 1.5,
      scrollTrigger: {
        trigger: paragraph,
        start: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
  });







// Create the main timeline
// const chapterIAnimation = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".chapterI__section--2",
//     start: "bottom 100%",
//     scrub: 1,
//     pin: true,
//     markers: false, // Set to true for debugging
//     anticipatePin: 1,
//   },
// });

// // Add animations to the timeline
// chapterIAnimation
//   .to(".chapterI__image--2", {
//     scale: 10,
//     duration: 2,
//     ease: "power2.inOut"
//   })
//   .to(".chapterI__section--2", {
//     opacity: 0,
//     duration: 1,
//     ease: "power2.out"
//   }, "-=0.5") // Overlap with previous animation
//   .from(".chapterI__image--3", {
//     scale: 0,
//     opacity: 0,
//     duration: 1.5,
//     ease: "power2.out"
//   }, "<0.5"); // Start 0.5 seconds before previous animation ends