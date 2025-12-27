  const ellipseGroup = document.querySelector('.ellipse-group');
  const ellipses = document.querySelectorAll('.ellipse');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ellipses.forEach(el => el.classList.add('animate'));
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  observer.observe(ellipseGroup);

