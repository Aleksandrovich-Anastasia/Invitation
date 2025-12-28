const btn = document.querySelector('.open-btn');
const modal = document.querySelector('.modal-envelope');
const main = document.querySelector('.main');

btn.addEventListener('click', () => {
  main.classList.remove('hidden');
  main.classList.add('visible');

  // Миттєво ховаємо текст, кнопку і фон
  modal.classList.add('hide-elements');

  // Анімуємо конверт
  document.querySelector('.convert-top').classList.add('open');
  document.querySelector('.convert-botton').classList.add('open');

  // Після завершення анімації конверта ховаємо модалку
  const convertTop = document.querySelector('.convert-top');
  convertTop.addEventListener('transitionend', function handler(e) {
    if (e.target !== convertTop) return;
    convertTop.removeEventListener('transitionend', handler);
    modal.style.display = 'none';
  });
});
