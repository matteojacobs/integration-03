// In your hamburger.js or a new animations.js file

gsap.registerPlugin(ScrollTrigger);

// Hero section animations
function initHeroAnimations() {
  // Split text for better animation control
  const heroTitle = document.querySelector(".hero__title");
  
  

  
  
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
function initNavAnimations() {
  gsap.from(".navigation__item", {
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.1,
    delay: 0.5,
  });
}

// Chapter title animations
function initChapterAnimations() {
  gsap.utils.toArray("h2").forEach((chapter) => {
    const specialChar = chapter.querySelector(".chapter__title--specialLetter");
    

    ScrollTrigger.create({
      trigger: chapter,
      start: "top center+=100",
      onEnter: () => {
        

        if (specialChar) {
          gsap.from(specialChar, {
            scale: 0,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
          });
        }
      },
    });
  });
}


  initHeroAnimations();
  initChapterAnimations();



