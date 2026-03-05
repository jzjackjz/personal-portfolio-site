// Simple navigation scroll effect
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  const currentScrollY = window.scrollY;
  
  // Add scrolled class for background effect
  if (currentScrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Animated arrow on hover
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.experience-card, .education-card');
  
  cards.forEach(card => {
    const arrow = card.querySelector('.arrow');
    let interval;
    
    card.addEventListener('mouseenter', function() {
      let state = 0;
      const arrows = ['›', '››', '›››'];
      
      interval = setInterval(() => {
        state = (state + 1) % 3;
        arrow.textContent = arrows[state];
      }, 200);
    });
    
    card.addEventListener('mouseleave', function() {
      clearInterval(interval);
      arrow.textContent = '›';
    });
  });
});
