const timingItems = document.querySelectorAll('.timing-part');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // анімація 1 раз
      }
    });
  },
  {
    threshold: 0.3,
  }
);

timingItems.forEach(item => observer.observe(item));
