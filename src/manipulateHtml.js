import LSOperations from './localStorageOperations.js';

export default (() => {
  const addListItem = (item) => {
    const newItem = document.createElement('LI');
    newItem.classList.add('todoItem');
    const newIcon = document.createElement('I');
    newIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');
    const newIconTrash = document.createElement('I');
    newIconTrash.classList.add('fa-solid', 'fa-trash', 'display-none');
    newIconTrash.setAttribute('data-index', item.index);
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.completed;
    checkbox.id = item.index;
    checkbox.classList.add('checkbox');
    const inputDesc = document.createElement('input');
    inputDesc.type = 'text';
    inputDesc.setAttribute('data-index', item.index);
    inputDesc.value = item.description;
    inputDesc.classList.add('description');
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

  return {
    displayList,
    addListItem,
  };
})();