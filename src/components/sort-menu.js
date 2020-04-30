import {sortTypes, createElement} from "../utils.js";

const createSortMenu = (sortButtons) => {
  return (
    `<ul class="sort">
      ${sortButtons}
    </ul>`
  );
};

class SortButtons {
  generateSortButton(button) {
    const {name, isActive} = button;
    const activeClass = `sort__button--active`;
    return (
      `<li><a href="#" class="sort__button ${isActive ? activeClass : ``}">Sort by ${name}</a></li>`
    );
  }

  getSortButtons() {
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

      sortButtons += this.generateSortButton(sortButtonObject);
    });

    return sortButtons;
  }
}


export default class SortMenu {
  getSortMenu() {
    return createElement(createSortMenu(new SortButtons().getSortButtons()));
  }
}
