import './style.css';
import completed from './completedTasks.js';
import * as LS from './localStorage.js';

const todoList = [
  {
    description: 'Task 1',
    completed: false,
    index: 1,
  },
  {
    description: 'Task 3',
    completed: true,
    index: 3,
  },
  {
    description: 'Task 4',
    completed: false,
    index: 4,
  },
  {
    description: 'Task 2',
    completed: true,
    index: 2,
  },
];

if (!JSON.parse(localStorage.getItem('todo-list'))) {
  LS.storeList(LS.setSortingIndex(todoList));
}

const btn = document.querySelector('.btn');
const list = document.querySelector('#todo-list');
function displayList() {
  const LocalStoragelist = LS.getList();
  LocalStoragelist.forEach((item) => {
    const newItem = document.createElement('LI');
    const newIcon = document.createElement('I');
    newIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.completed;
    checkbox.id = item.index;
    checkbox.classList.add('checkbox');
    const label = document.createElement('label');
    const textnode = document.createTextNode(item.description);
    label.appendChild(textnode);
    newItem.appendChild(checkbox);
    newItem.appendChild(label);
    newItem.appendChild(newIcon);
    list.insertBefore(newItem, btn);
  });
}
displayList();
const checkboxes = document.querySelectorAll('.checkbox');

[...checkboxes].forEach((button) => {
  button.addEventListener('change', completed);
});
