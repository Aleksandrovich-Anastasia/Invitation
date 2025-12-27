const finishIcons = document.querySelectorAll('.finish svg');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.9 } // коли 40% елементу видно
);

finishIcons.forEach(icon => observer.observe(icon));
