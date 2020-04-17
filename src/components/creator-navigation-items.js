import {createNavigationItem} from "./navigation-item.js";
import {navigationTypes} from "../utils.js";

const generateMoviesNumber = (type, arrayLocal) => {
  let number = 0;

  switch (type) {
    case `Watchlist`:
      number = arrayLocal.slice().filter((element) => element.isWatchlist).length;
      break;
    case `History`:
      number = arrayLocal.slice().filter((element) => element.isWatched).length;
      break;
    case `Favorites`:
      number = arrayLocal.slice().filter((element) => element.isFavorite).length;
      break;
    default:
      number = ``;
      break;
  }

  return number;
};

export const createNavigationItems = (array) => {
  let counter = 0;
  let navigationItems = ``;

  navigationTypes.forEach((item) => {
    let navigationItemObject = {
      name: item,
      isActive: false,
      number: generateMoviesNumber(item, array),
    };
    counter++;

    if (counter === 1) {
      navigationItemObject.isActive = true;
      navigationItemObject.number = ``;
    }

    navigationItems += createNavigationItem(navigationItemObject);
  });

  return navigationItems;
};
