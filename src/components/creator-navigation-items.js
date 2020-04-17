import {createNavigationItem} from "./navigation-item.js";
import {navigationTypes} from "../utils.js";

const generateMoviesNumber = (type, obj) => {
  let number = 0;

  switch (type) {
    case `Watchlist`:
      Array.from(obj).forEach((element) => {
        if (element.isWatchlist) {
          number++;
        }
      });
      break;
    case `History`:
      Array.from(obj).forEach((element) => {
        if (element.isWatched) {
          number++;
        }
      });
      break;
    case `Favorites`:
      Array.from(obj).forEach((element) => {
        if (element.isFavorite) {
          number++;
        }
      });
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
