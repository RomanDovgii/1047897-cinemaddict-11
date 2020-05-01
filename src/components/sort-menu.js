import {sortTypes} from "../utils.js";
import {createElement} from "../../../1047897-taskmanager-11/src/utils.js";

const createSortMenu = (sortButtons) => {
  return (
    `<ul class="sort">
      ${sortButtons}
    </ul>`
  );
};

const generateSortButton = (button) => {
  const {name, isActive} = button;
  const activeClass = `sort__button--active`;
  return (
    `<li><a href="#" class="sort__button ${isActive ? activeClass : ``}">Sort by ${name}</a></li>`
  );
};

const getSortButtons = () => {
  let counter = 0;
  let sortButtons = ``;

  sortTypes.forEach((item) => {
    let sortButtonObject = {
      name: item,
      isActive: false,
    };
    counter++;

    if (counter === 1) {
      sortButtonObject.isActive = true;
    }

    sortButtons += generateSortButton(sortButtonObject);
  });

  return createSortMenu(sortButtons);
};


export default class SortMenu {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return getSortButtons();
  }

  getElement() {
    this._element = createElement(this.getTemplate());

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
