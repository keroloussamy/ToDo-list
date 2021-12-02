export default (() => {
  const setSortingIndex = (todoList) => todoList.map((item, index) => {
    item.index = index;
    return item;
  });

  const storeList = (todoList) => {
    localStorage.setItem('todo-list', JSON.stringify(todoList));
  };

  const getList = () => JSON.parse(localStorage.getItem('todo-list'));

  const completeTask = (event) => {
    const list = getList();
    if (event.target.checked === true) {
      list[event.target.id].completed = true;
    } else {
      list[event.target.id].completed = false;
    }
    storeList(list);
  };

  const add = (event) => {
    const list = getList();
    list.push({ description: event.target.value, completed: false, index: 0 });
    storeList(setSortingIndex(list));
  };

  const updateTask = (event) => {
    // To delay the display none for the Trash Icone, so if it clicked its event fire.
    setTimeout(() => {
      event.target.style.backgroundColor = '#fff';
      event.target.parentElement.style.backgroundColor = '#fff';
      event.target.nextSibling.nextSibling.classList.add('display-none');
      event.target.nextSibling.classList.remove('display-none');
    }, 200);
    const list = getList();
    const index = event.target.getAttribute('data-index');
    list[index].description = event.target.value;
    storeList(list);
  };

  const remove = (event) => {
    const list = getList();
    const index = event.target.getAttribute('data-index');
    list.splice(index, 1);
    storeList(setSortingIndex(list));
  };

  const clearAllCompleted = () => {
    const list = getList();
    const newList = list.filter((e) => e.completed === false);
    storeList(setSortingIndex(newList));
  };

  return {
    setSortingIndex,
    storeList,
    getList,
    completeTask,
    add,
    updateTask,
    remove,
    clearAllCompleted,
  };
})();