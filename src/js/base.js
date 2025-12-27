const titles = document.querySelectorAll('.section-title');

const titleObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

titles.forEach(title => {
  titleObserver.observe(title);
});
