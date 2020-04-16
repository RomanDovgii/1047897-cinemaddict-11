import {createNavigationItem} from "./navigation-item.js";
import {navigationTypes} from "../utils.js";

export const createNavigationItems = () => {
  let counter = 0;
  let navigationItems = ``;

  navigationTypes.forEach((item) => {
    let navigationItemObject = {
      name: item,
      isActive: false,
      number: 10,
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
