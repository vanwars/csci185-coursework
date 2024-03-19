const html = document.documentElement;
const root = document.querySelector(':root');
window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  root.style.setProperty('--offsetX', `${0.1*scrollTop}px`);
  root.style.setProperty('--offsetY', `${scrollTop}px`);
  root.style.setProperty('--rotation', `${scrollTop}deg`);
});