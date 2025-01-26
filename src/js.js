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

document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.getElementById("progressBar");

  gsap.to(progressBar, {
    width: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: "html",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });
});

const hamburger = document.querySelector(".hamburger");
hamburger.classList.remove("no-js");
const navList = document.querySelector(".hero__navigation--list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger--active");
  navList.classList.toggle("hero__navigation--list--active");
});

document.addEventListener("click", (e) => {
  if (window.innerWidth > 48 * 16) return;
  if (!e.target.closest(".hero__navigation")) {
    hamburger.classList.remove("hamburger--active");
    navList.classList.remove("hero__navigation--list--active");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 48 * 16) {
    hamburger.classList.remove("hamburger--active");
    navList.classList.remove("hero__navigation--list--active");
  }
});



document.addEventListener("mousemove", function (event) {
  const topLayer = document.querySelector(".chapterI__image--interaction--top");
  const rect = topLayer.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  topLayer.style.setProperty("--x", `${x}px`);
  topLayer.style.setProperty("--y", `${y}px`);
  topLayer.style.opacity = 1;
});

document.addEventListener("mouseleave", function () {
  const topLayer = document.querySelector(".chapterI__image--interaction--top");
  topLayer.style.opacity = 0;
});


const $form = document.querySelector(".cipherForm");
const $interaction__message = document.querySelector(".inter3__message");
const $secretMessage = document.querySelector("#secretMessage");
const $interaction__title = document.querySelector(".inter3__pseudonym");
const $downloadSection = document.querySelector(".inter3__final--buttons");
const $doItAgain = document.querySelector("#doItAgain");
const $inter3__final = document.querySelector(".inter3__final");
const $pseudonym = document.querySelector("#pseudonym");
const $pseudonymError = document.querySelector("#pseudonym-error");
const $secretMessageError = document.querySelector("#secretMessage-error");

const caesarCipher = (text, decrypt = false) => {
  const shift = decrypt ? -3 : 3;
  return text.replace(/[a-zA-Z]/g, function (c) {
    const base = c < "a" ? 65 : 97;
    return String.fromCharCode(
      ((c.charCodeAt(0) - base + shift + 26) % 26) + base
    );
  });
};

const encryptText = (text) => caesarCipher(text, false);
const decryptText = (text) => caesarCipher(text, true);

const handleFormSubmit = (event) => {
  event.preventDefault();
  if (!$pseudonym.value || !$secretMessage.value) {
    if (!$pseudonym.value) {
      $pseudonymError.style.display = "block";
    }
    if (!$secretMessage.value) {
      $secretMessageError.style.display = "block";
    }
    return;
  }

  const action = event.submitter.value;
  const message = $secretMessage.value;
  let result;

  if (action === "Encrypt") {
    result = encryptText(message);
    console.log(result);
  } else if (action === "Decipher") {
    result = decryptText(message);
    console.log(result);
  }

  $interaction__title.textContent = $pseudonym.value;
  $interaction__message.textContent = result;

  $form.classList.add("hidden");
  $inter3__final.classList.remove("hidden");
  $downloadSection.classList.remove("hidden"); // Ensure download section is visible
};

const doItAgain = () => {
  $form.reset();
  $form.classList.remove("hidden");
  $downloadSection.classList.add("hidden");
  $interaction__title.textContent = "";
  $interaction__message.textContent = "";
};

$form.addEventListener("submit", handleFormSubmit);
$doItAgain.addEventListener("click", doItAgain);

const checkInput = (inputElement, errorElement) => {
  if (inputElement.value.trim() === "") {
    errorElement.style.display = "block";
  } else {
    errorElement.style.display = "none";
  }
};

$pseudonym.addEventListener("input", () => {
  checkInput($pseudonym, $pseudonymError);
});

$pseudonym.addEventListener("blur", () => {
  checkInput($pseudonym, $pseudonymError);
});

$secretMessage.addEventListener("input", () => {
  checkInput($secretMessage, $secretMessageError);
});

$secretMessage.addEventListener("blur", () => {
  checkInput($secretMessage, $secretMessageError);
});



const trailSegments = 15;
const trailElements = [];
const positions = Array(trailSegments)
  .fill()
  .map(() => ({ x: 0, y: 0 }));

for (let i = 0; i < trailSegments; i++) {
  const trail = document.createElement("div");
  trail.className = "trail";
  document.body.appendChild(trail);
  trailElements.push(trail);
}

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
const cursorSpeed = 0.4;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const updateTrail = () => {
  positions.unshift({ x: cursorX, y: cursorY });
  if (positions.length > trailSegments) positions.pop();

  trailElements.forEach((trail, index) => {
    const posIndex = Math.min(index, positions.length - 1);
    const { x, y } = positions[posIndex];
    const size = 15 * (1 - index / trailSegments);

    trail.style.left = x + "px";
    trail.style.top = y + "px";
    trail.style.width = `${size}px`;
    trail.style.height = `${size}px`;
    trail.style.opacity = 1 - (index / trailSegments) * 0.8;
  });
};

const animate = () => {
  cursorX += (mouseX - cursorX) * cursorSpeed;
  cursorY += (mouseY - cursorY) * cursorSpeed;
  updateTrail();
  requestAnimationFrame(animate);
};

animate();

document
  .querySelectorAll("a, input, textarea, hamburger")
  .forEach((element) => {
    element.addEventListener("mouseenter", () => {
      trailElements.forEach((trail) => {
        trail.style.transform = "scale(2.8)";
      });
    });
    element.addEventListener("mouseleave", () => {
      trailElements.forEach((trail) => {
        trail.style.transform = "scale(1)";
      });
    });
  });



  