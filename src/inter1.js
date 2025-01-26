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
