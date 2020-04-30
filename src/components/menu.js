import {navigationTypes, createElement} from "../utils.js";

const createMenu = (navigationItems) => {
  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${navigationItems}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

class NavigationItem {
  constructor(item) {
    this._item = item;
  }

  getElementCount(number) {
    return `<span class="main-navigation__item-count">${number}</span>`;
  }

  getNavigationItem() {
    const {name, isActive, number} = this._item;
    const activeClass = `main-navigation__item--active`;
    return (`<a href="#${name.toLowerCase()}" class="main-navigation__item ${isActive ? activeClass : ``}">${name} ${number ? this.getElementCount(number) : ``}</a>`);
  }
}

class NavigationItems {
  constructor(movies) {
    this._movies = movies;
  }

  sortMovies(type, movies) {
    let number;

    switch (type) {
      case `Watchlist`:
        number = movies.slice().filter((element) => element.isWatchlist).length;
        break;
      case `History`:
        number = movies.slice().filter((element) => element.isWatched).length;
        break;
      case `Favorites`:
        number = movies.slice().filter((element) => element.isFavorite).length;
        break;
      default:
        number = 0;
        break;
    }

    return number;
  }

  getNavigationItems() {
    let counter = 0;
    let navigationItems = ``;

    navigationTypes.forEach((item) => {
      let navigationItemObject = {
        name: item,
        isActive: false,
        number: this.sortMovies(item, this._movies),
      };
      counter++;

      if (counter === 1) {
        navigationItemObject.isActive = true;
        navigationItemObject.number = ``;
      }

      navigationItems += new NavigationItem(navigationItemObject).getNavigationItem();
    });

    return navigationItems;
  }
}

export default class Menu {
  getMenu(movies) {
    return createElement(createMenu(new NavigationItems(movies).getNavigationItems()));
  }
}
