import manipulateHtml from '../manipulateHtml.js';

const add = (event) => {
  const list = [];
  list.push({ description: event.target.value, completed: false, index: 0 });
  return list.length;
};

let list = [{ description: 'task one', completed: false, index: 0 },
  { description: 'task one', completed: false, index: 1 },
  { description: 'task one', completed: false, index: 2 },
  { description: 'task one', completed: false, index: 3 },
  { description: 'task one', completed: false, index: 4 },
  { description: 'task one', completed: false, index: 5 },
];

const displayList = () => {
  list.forEach((item) => {
    manipulateHtml.addListItem(item);
  });
};

const renderUI = () => {
  const oldList = document.querySelectorAll('.todoItem');
  [...oldList].forEach((e) => e.remove());
  displayList();
};

const remove = (event) => {
  list.splice(event.target.index, 1);
  renderUI();
  return list.length;
};

const editing = (event) => {
  const { index } = event.target;
  list[index].description = event.target.value;
  return list[index].description;
};

const completed = (event) => {
  const { index } = event.target;
  list[index].completed = event.target.completed;
  return list[index].completed;
};

const clearAllCompleted = () => {
  const newList = list.filter((e) => e.completed === false);
  list = newList;
  return list.length;
};

module.exports = {
  add, remove, displayList, renderUI, editing, completed, clearAllCompleted,
};
