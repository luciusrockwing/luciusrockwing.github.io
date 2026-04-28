// Smooth scroll for "See my work" button
document.addEventListener('DOMContentLoaded', () => {
  const myWorkLink = document.getElementById('my-work-link');
  if (myWorkLink) {
    myWorkLink.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('showcase-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
