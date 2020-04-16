import {createSortButton} from "./sort-menu-button.js";
import {sortTypes} from "../utils.js";

export const createSortButtons = () => {
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

    sortButtons += createSortButton(sortButtonObject);
  });

  return sortButtons;
};
