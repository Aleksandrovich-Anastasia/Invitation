const btn = document.querySelector('.open-btn');
const modal = document.querySelector('.modal-envelope');
const main = document.querySelector('.main');

btn.addEventListener('click', () => {
  // 1. Покажемо main відразу (якщо він був hidden)
  main.classList.remove('hidden');
  main.classList.add('visible');

  // 2. Запускаємо анімацію конверта
  modal.classList.add('open');

  // 3. Після завершення анімації конверта ховаємо модалку
  modal.addEventListener('transitionend', function handler(e) {
    if (e.target !== modal) return;
    modal.removeEventListener('transitionend', handler);

    modal.style.display = 'none';
  });
});
