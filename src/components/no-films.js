import {createElement} from "../utils.js";

const createNoFilms = () => {
  return (
    `<section class="films-list">
      <h2 class="films-list__title">There are no movies in our database</h2>
    </section>`
  );
};

export default class NoFilms {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    this._template = createNoFilms();

    return this._template;
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
