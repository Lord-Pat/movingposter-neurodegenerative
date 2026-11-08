'use strict';

const POSTER_WIDTH = 848;
const POSTER_HEIGHT = 1200;
const PAGE_MARGIN = 48;

const poster = document.querySelector('#poster');
const posterFit = document.querySelector('#posterFit');

// Se mantiene una composición interna fija de 848 × 1200 px.
function fitPosterToViewport() {
  const availableWidth = Math.max(120, window.innerWidth - PAGE_MARGIN);
  const availableHeight = Math.max(160, window.innerHeight - PAGE_MARGIN);
  const scale = Math.min(1, availableWidth / POSTER_WIDTH, availableHeight / POSTER_HEIGHT);

  posterFit.style.width = `${POSTER_WIDTH * scale}px`;
  posterFit.style.height = `${POSTER_HEIGHT * scale}px`;
  poster.style.transform = `scale(${scale})`;
}

// Convierte las coordenadas reales del ratón al tamaño original del cartel.
function getPosterCoordinates(event) {
  const rect = poster.getBoundingClientRect();
  return {
    x: Math.max(0, Math.min(POSTER_WIDTH, (event.clientX - rect.left) / rect.width * POSTER_WIDTH)),
    y: Math.max(0, Math.min(POSTER_HEIGHT, (event.clientY - rect.top) / rect.height * POSTER_HEIGHT)),
  };
}

function moveMemoryLens(event) {
  const { x, y } = getPosterCoordinates(event);
  poster.style.setProperty('--cursor-x', `${x + 22}px`);
  poster.style.setProperty('--cursor-y', `${y + 22}px`);
}

// Las tres interacciones exigidas por la actividad están programadas en JS.
poster.addEventListener('mouseenter', (event) => {
  moveMemoryLens(event);
  poster.style.setProperty('--lens-opacity', '1');
});

poster.addEventListener('mousemove', moveMemoryLens);

poster.addEventListener('mouseleave', () => {
  poster.style.setProperty('--lens-opacity', '0');
});

window.addEventListener('resize', fitPosterToViewport);
fitPosterToViewport();
