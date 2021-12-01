export const setSortingIndex = (todoList) => todoList.map((item, index) => {
  item.index = index; return item;
});

export const storeList = (todoList) => {
  localStorage.setItem('todo-list', JSON.stringify(todoList));
};

export const getList = () => JSON.parse(localStorage.getItem('todo-list'));
