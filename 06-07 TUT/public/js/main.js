document.addEventListener('DOMContentLoaded', () => {
  console.log('Main JS loaded');

  // Active Navigation Highlighting
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // Simple interaction example: Log click on headings
  const headings = document.querySelectorAll('h1');
  headings.forEach(h1 => {
    h1.addEventListener('click', () => {
      h1.style.filter = 'hue-rotate(90deg)';
    });
    h1.style.cursor = 'pointer';
    h1.title = 'Click me for a surprise!';
  });
});
