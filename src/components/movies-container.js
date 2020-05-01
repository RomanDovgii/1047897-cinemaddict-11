import {createElement} from "../utils.js";

const createMovieContainer = () => {
  return (`<section class="films"></section>`);
};

export default class MoviesContainer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMovieContainer();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
