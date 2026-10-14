'use strict';

const heartsContainer = document.getElementById('hearts');
const loveButton = document.getElementById('loveButton');
const surprise = document.getElementById('surprise');
const heartSymbols = ['♥', '♡', '💗', '💕', '💖'];

function createHeart(burst = false) {
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${14 + Math.random() * 22}px`;
  heart.style.animationDuration = `${burst ? 2 + Math.random() * 1.5 : 5 + Math.random() * 6}s`;
  heartsContainer.appendChild(heart);
  heart.addEventListener('animationend', () => heart.remove(), { once: true });
}

// Keep a steady stream of hearts without requiring any external libraries.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion) {
  window.setInterval(() => createHeart(), 450);
  for (let i = 0; i < 12; i++) {
    window.setTimeout(() => createHeart(), i * 250);
  }
}

loveButton.addEventListener('click', () => {
  surprise.classList.add('show');
  loveButton.textContent = '♥ You are my favorite ♥';

  if (!reducedMotion) {
    for (let i = 0; i < 25; i++) {
      window.setTimeout(() => createHeart(true), i * 80);
    }
  }
});
