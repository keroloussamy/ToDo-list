export function setSortingIndex(todoList) {
  return todoList.map((item, index) => { item.index = index; return item; });
}

export function storeList(todoList) {
  localStorage.setItem('todo-list', JSON.stringify(todoList));
}

export function getList() {
  return JSON.parse(localStorage.getItem('todo-list'));
}
