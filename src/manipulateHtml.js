import LSOperations from './localStorageOperations.js';

export default (() => {
  const todoList = [];

  const addListItem = (item) => {
    const newItem = document.createElement('LI');
    newItem.classList.add('todoItem');

    const newIcon = document.createElement('I');
    newIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');

    const newIconTrash = document.createElement('I');
    newIconTrash.classList.add('fa-solid', 'fa-trash', 'display-none');
    newIconTrash.setAttribute('data-index', item.index);
    newIconTrash.addEventListener('click', (event) => {
      LSOperations.remove(event);
      renderUI(); // eslint-disable-line
    });

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.completed;
    checkbox.id = item.index;
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('change', LSOperations.completeTask);

    const inputDesc = document.createElement('input');
    inputDesc.type = 'text';
    inputDesc.setAttribute('data-index', item.index);
    inputDesc.value = item.description;
    inputDesc.classList.add('description');
    inputDesc.addEventListener('focusout', LSOperations.updateTask);
    inputDesc.addEventListener('focus', (event) => {
      event.target.style.backgroundColor = '#fff4bf';
      event.target.parentElement.style.backgroundColor = '#fff4bf';
      event.target.nextSibling.classList.add('display-none');
      event.target.nextSibling.nextSibling.classList.remove('display-none');
    });

    newItem.appendChild(checkbox);
    newItem.appendChild(inputDesc);
    newItem.appendChild(newIcon);
    newItem.appendChild(newIconTrash);

    const btn = document.querySelector('.btn');
    const list = document.querySelector('#todo-list');
    list.insertBefore(newItem, btn);
  };

  const displayList = () => {
    const LocalStoragelist = LSOperations.getList();
    LocalStoragelist.forEach((item) => {
      addListItem(item);
    });
  };

  const renderUI = () => {
    if (!JSON.parse(localStorage.getItem('todo-list'))) {
      LSOperations.storeList(LSOperations.setSortingIndex(todoList));
    }

    const oldList = document.querySelectorAll('.todoItem');
    [...oldList].forEach((e) => e.remove());
    displayList();
  };

  return {
    displayList,
    addListItem,
    renderUI,
  };
})();