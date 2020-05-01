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

const createElementCount = (number) => {
  return `<span class="main-navigation__item-count">${number}</span>`;
};

const getNavigationItem = (item) => {
  const {name, isActive, number} = item;
  const activeClass = `main-navigation__item--active`;
  return (`<a href="#${name.toLowerCase()}" class="main-navigation__item ${isActive ? activeClass : ``}">${name} ${number ? createElementCount(number) : ``}</a>`);
};

const sortMovies = (type, movies) => {
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
};

let counter = 0;

const createNavigationItem = (item, movies) => {
  counter++;

  return counter > 1 ? {
    name: item,
    isActive: false,
    number: sortMovies(item, movies),
  } : {
    name: item,
    isActive: true,
    number: sortMovies(item, movies),
  };
};

const getNavigationItems = (movies) => {
  return navigationTypes.reduce((total, element) => total + getNavigationItem(createNavigationItem(element, movies)), ` `);
};

export default class Menu {
  constructor(movies) {
    this._movies = movies;

    this._element = null;
  }

  getTemplate() {
    return createMenu(getNavigationItems(this._movies));
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this.element = null;
  }
}
