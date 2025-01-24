const trailSegments = 15;
const trailElements = [];
const positions = Array(trailSegments)
  .fill()
  .map(() => ({ x: 0, y: 0 }));

// Create trail elements
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
}

const animate = () => {
  cursorX += (mouseX - cursorX) * cursorSpeed;
  cursorY += (mouseY - cursorY) * cursorSpeed;
  updateTrail();
  requestAnimationFrame(animate);
};

animate();

// Hover effects
document.querySelectorAll("a, input").forEach((element) => {
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
