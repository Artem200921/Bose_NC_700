const slider = document.querySelector('.slider');
let isHovering = false;

slider.addEventListener('mouseover', () => {
  isHovering = true;
});

slider.addEventListener('mouseout', () => {
  isHovering = false;
});

function nextSlide() {
  if (!isHovering) {
    const firstSlide = slider.children[0];
    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = 'translateX(-100%)';
    setTimeout(() => {
      slider.appendChild(firstSlide);
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
    }, 500);
  }
}

setInterval(nextSlide, 5000);
