import { JSDOM } from 'jsdom';
import MockLSOperations from './__mocks__/localStorageOperations.js';
import manipulateHtml from './manipulateHtml.js';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

describe('Add Method', () => {
  test('Add to the list', () => {
    expect(MockLSOperations.add({ target: { value: 'ABC' } })).toBe(1);
  });

  test('Add one new item to the list', () => {
    document.body.innerHTML = `<ul id="todo-list">
      <li>Today's To Do<i class="fa-solid fa-arrows-rotate"></i></li>
      <li class="add-item"><input type="text" id="inp-add-item" placeholder="Add to your list ..."></li>
      <li class="btn"><a href="">Clear all Completed</a></li>
    </ul>`;

    manipulateHtml.addListItem({ description: 'First Item', completed: false, index: 1 });
    const list = document.querySelectorAll('#todo-list li');
    expect(list).toHaveLength(4);
  });
});

describe('Remove Method', () => {
  test('Remove from the list', () => {
    expect(MockLSOperations.remove({ target: { index: '1' } })).toBe(2);
  });

  test('Remove one new item from the list', () => {
    document.body.innerHTML = `<ul id="todo-list">
      <li>Today's To Do<i class="fa-solid fa-arrows-rotate"></i></li>
      <li class="add-item"><input type="text" id="inp-add-item" placeholder="Add to your list ..."></li>
      <li class="btn"><a href="">Clear all Completed</a></li>
    </ul>`;

    MockLSOperations.displayList();
    MockLSOperations.remove({ target: { index: '1' } });
    const list = document.querySelectorAll('.todoItem');
    expect(list).toHaveLength(1);
  });
});
