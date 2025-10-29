const circle = document.getElementById("circle");
const text = " PORTFOLIO DESIGN  ";
const radius = 450;
const degStep = 410 / text.length;

for (let i = 0; i < text.length; i++) {
  const span = document.createElement("span");
  span.innerText = text[i];
  span.style.setProperty("--angle", `${i * degStep}deg`);
  circle.appendChild(span);
}




const about = document.querySelector(".about");
let vh = window.innerHeight;
let ticking = false;

function onScroll() {
  const y = window.scrollY;   
  const progress = Math.max(0, Math.min(y / vh, 1)); 
  const ty = 100 - progress * 100;
  about.style.transform = `translateY(${ty}%)`;
  about.style.pointerEvents = progress > 0.98 ? "auto" : "none";
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => { onScroll(); ticking = false; });
    ticking = true;
  }
}, { passive: true });

window.addEventListener("resize", () => { vh = window.innerHeight; onScroll(); });

onScroll();
