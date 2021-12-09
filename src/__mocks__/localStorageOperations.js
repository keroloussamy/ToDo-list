import manipulateHtml from '../manipulateHtml.js';

const add = (event) => {
  const list = [];
  list.push({ description: event.target.value, completed: false, index: 0 });
  return list.length;
};

const list = [{ description: 'task one', completed: false, index: 0 },
  { description: 'task one', completed: false, index: 1 },
  { description: 'task one', completed: false, index: 2 },
  { description: 'task one', completed: false, index: 3 },
  { description: 'task one', completed: false, index: 4 },
  { description: 'task one', completed: false, index: 5 }
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
  let index = event.target.index;
  list[index].description = event.target.value;
  return list[index].description;
};

module.exports = { add, remove, displayList, renderUI, editing };
