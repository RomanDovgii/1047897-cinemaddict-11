import {createElement} from "../utils.js";

const createMainContainer = (films) => {
  return (
    `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

      <div class="films-list__container films-list__container--all">
        ${films}
      </div>
    </section>`
  );
};

const createRatedContainer = (films) => {
  return (
    `<section class="films-list--extra films-list--rated">
      <h2 class="films-list__title">Top rated</h2>

      <div class="films-list__container films-list__container--rated">
        ${films}
      </div>
    </section>`
  );
};

const createCommentedContainer = (films) => {
  return (
    `<section class="films-list--extra films-list--commented">
      <h2 class="films-list__title">Most commented</h2>

      <div class="films-list__container films-list__container--commented">
       ${films}
      </div>
    </section>`
  );
};

export default class Films {
  constructor(films, type) {
    this._films = films;
    this._type = type;

    this._template = null;
    this._element = null;
  }

  getTemplate() {
    switch (this._type) {
      case `rated`:
        this._template = createRatedContainer(this._films);
        break;

      case `commented`:
        this._template = createCommentedContainer(this._films);
        break;

      default:
        this._template = createMainContainer(this._films);
        break;
    }

    return this._template;
  }

  getElement() {
    this._element = createElement(this.getTemplate());

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
