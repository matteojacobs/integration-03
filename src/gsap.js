
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

  gsap.from(".hero__title--specialLetter", {
    rotation: 360,
    duration: 1.5,
    ease: "back.out(1.7)",
    delay: 0.5,
  });

  gsap.from(".hero__gif", {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: "power3.out",
    delay: 1,
  });
};

const initNavAnimations = () => {
  gsap.from(".navigation__item", {
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.1,
    delay: 0.5,
  });
};

const initChapterIAnimations = () => {
  gsap.from(".chapterI__title", {
    scrollTrigger: {
      trigger: ".chapterI__title",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".chapterI__image--1", {
    scrollTrigger: {
      trigger: ".chapterI__image--1",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".chapterI__image--2", {
    scrollTrigger: {
      trigger: ".chapterI__image--2",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".chapterI__paragraph--1", {
    scrollTrigger: {
      trigger: ".chapterI__paragraph--1",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".chapterI__paragraph--2", {
    scrollTrigger: {
      trigger: ".chapterI__paragraph--2",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
  gsap.from(".chapterI__paragraph--3", {
    scrollTrigger: {
      trigger: ".chapterI__paragraph--3",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
  gsap.from(".chapterI__paragraph--4", {
    scrollTrigger: {
      trigger: ".chapterI__paragraph--4",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

};

const initChapterIIAnimations = () => {
  gsap.from(".chapterII__title", {
    scrollTrigger: {
      trigger: ".chapterII__title",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".chapterII__image--1", {
    scrollTrigger: {
      trigger: ".chapterII__image--1",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".chapterII__paragraph--1", {
    scrollTrigger: {
      trigger: ".chapterII__paragraph--1",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
  
  gsap.from(".chapterII__paragraph--2", {
    scrollTrigger: {
      trigger: ".chapterII__paragraph--2",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
  gsap.from(".chapterII__paragraph--3", {
    scrollTrigger: {
      trigger: ".chapterII__paragraph--3",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

};

const initChapterIIIAnimations = () => {
  gsap.from(".chapterIII__title", {
    scrollTrigger: {
      trigger: ".chapterIII__title",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".chapterIII__image", {
    scrollTrigger: {
      trigger: ".chapterIII__image",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".chapterIII__paragraph--1", {
    scrollTrigger: {
      trigger: ".chapterIII__paragraph--1",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
  
  gsap.from(".chapterIII__paragraph--2", {
    scrollTrigger: {
      trigger: ".chapterIII__paragraph--2",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
  gsap.from(".chapterIII__paragraph--3", {
    scrollTrigger: {
      trigger: ".chapterIII__paragraph--3",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

};

const initChapterIVAnimations = () => {
  gsap.from(".chapterIV__title", {
    scrollTrigger: {
      trigger: ".chapterIV__title",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".chapterIV__paragraph--1", {
    scrollTrigger: {
      trigger: ".chapterIV__paragraph--1",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

};



const initAnimations = () => {
  initHeroAnimations();
  initNavAnimations();
  initChapterIAnimations();
  initChapterIIAnimations();
  initChapterIIIAnimations();
  initChapterIVAnimations();

};

initAnimations();