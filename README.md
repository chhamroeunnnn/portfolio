const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

// Add mouse movement parallax effect to gradient blurs
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX / window.innerWidth;
  mouseY = e.clientY / window.innerHeight;

  const blur1 = document.querySelector('.blur-1');
  const blur2 = document.querySelector('.blur-2');
  const blur3 = document.querySelector('.blur-3');

  if (blur1) blur1.style.transform = `translate(${mouseX * 50}px, ${mouseY * 50}px)`;
  if (blur2) blur2.style.transform = `translate(${-mouseX * 40}px, ${-mouseY * 40}px)`;
  if (blur3) blur3.style.transform = `translate(${mouseX * 30}px, ${-mouseY * 30}px)`;
});

