import './style.css';
import LSOperations from './localStorageOperations.js';
import manipulateHtml from './manipulateHtml.js';

manipulateHtml.renderUI();

const input = document.querySelector('#inp-add-item');
input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    LSOperations.add(event);
    event.target.value = '';
    manipulateHtml.renderUI();
  }
});

const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  LSOperations.clearAllCompleted();
  manipulateHtml.renderUI();
});
