import './style.css';
import applyData from './applyData';

const btn = document.querySelector('button[type="submit"]');
const refresh = document.querySelector('div.header i');
btn.addEventListener('click', e => {
  e.preventDefault();
  refresh.setAttribute('style','visibility:visible');
  applyData();
});
