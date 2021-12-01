import { getList, storeList } from './localStorage.js';

export default function completed(e) {
  const list = getList();
  if (e.target.checked === true) {
    list[e.target.id].completed = true;
  } else {
    list[e.target.id].completed = false;
  }
  storeList(list);
}