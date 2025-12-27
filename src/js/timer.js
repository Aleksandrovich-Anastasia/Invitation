// ===== Countdown Timer with Flip & Grammar =====

const weddingDate = new Date('2026-06-06T14:00:00').getTime();

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const daysLabel = document.getElementById('days-label');

let prevValues = {
  days: '',
  hours: '',
  minutes: '',
  seconds: '',
};

// 🇺🇦 правильні відмінки
function getUkrainianDeclension(number, forms) {
  const n = Math.abs(number) % 100;
  const n1 = n % 10;

  if (n > 10 && n < 20) return forms[2];
  if (n1 > 1 && n1 < 5) return forms[1];
  if (n1 === 1) return forms[0];
  return forms[2];
}

function updateValue(el, newValue, key) {
  if (prevValues[key] !== newValue) {
    el.classList.remove('flip');
    void el.offsetWidth; // reset animation
    el.textContent = newValue;
    el.classList.add('flip');
    prevValues[key] = newValue;
  }
}

function updateCountdown() {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff <= 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  updateValue(daysEl, String(days).padStart(2, '0'), 'days');
  updateValue(hoursEl, String(hours).padStart(2, '0'), 'hours');
  updateValue(minutesEl, String(minutes).padStart(2, '0'), 'minutes');
  updateValue(secondsEl, String(seconds).padStart(2, '0'), 'seconds');

  // граматика для "днів"
  daysLabel.textContent = getUkrainianDeclension(days, [
    'день',
    'дні',
    'днів',
  ]);
}

updateCountdown();
setInterval(updateCountdown, 1000);
