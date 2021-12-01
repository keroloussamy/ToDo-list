import './style.css';

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
const btn = document.querySelector('.btn');
const list = document.querySelector('#todo-list');
function displayList() {
  todoList.sort((a, b) => a.index - b.index);
  todoList.forEach((item) => {
    const newItem = document.createElement('LI');
    const newIcon = document.createElement('I');
    newIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
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