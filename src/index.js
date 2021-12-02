import './style.css';
import LSOperations from './localStorageOperations.js';
import manipulateHtml from './manipulateHtml.js';

const todoList = [];

const renderUI = () => {
  if (!JSON.parse(localStorage.getItem('todo-list'))) {
    LSOperations.storeList(LSOperations.setSortingIndex(todoList));
  }

  manipulateHtml.displayList();

  const checkboxes = document.querySelectorAll('.checkbox');
  [...checkboxes].forEach((button) => {
    button.addEventListener('change', LSOperations.completeTask);
  });

  const inputs = document.querySelectorAll('.description');
  [...inputs].forEach((input) => {
    input.addEventListener('focusout', LSOperations.updateTask);
  });

  [...inputs].forEach((input) => {
    input.addEventListener('focus', (event) => {
      event.target.style.backgroundColor = '#fff4bf';
      event.target.parentElement.style.backgroundColor = '#fff4bf';
      event.target.nextSibling.classList.add('display-none');
      event.target.nextSibling.nextSibling.classList.remove('display-none');
    });
  });

  const trashes = document.querySelectorAll('.fa-trash');
  [...trashes].forEach((trash) => {
    trash.addEventListener('click', (event) => {
      LSOperations.remove(event);
      const oldList = document.querySelectorAll('.todoItem');
      [...oldList].forEach((e) => e.remove());
      renderUI();
    });
  });
};

const input = document.querySelector('#inp-add-item');
input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    LSOperations.add(event);
    event.target.value = '';
    const list = LSOperations.getList();
    manipulateHtml.addListItem(list[list.length - 1]);
  }
});

const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  LSOperations.clearAllCompleted();
  const oldList = document.querySelectorAll('.todoItem');
  [...oldList].forEach((e) => e.remove());
  renderUI();
});

renderUI();