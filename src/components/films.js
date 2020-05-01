import {createElement} from "../utils.js";

const createMainContainer = () => {
  return (
    `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

      <div class="films-list__container films-list__container--all">
      </div>
    </section>`
  );
};

const createRatedContainer = () => {
  return (
    `<section class="films-list--extra films-list--rated">
      <h2 class="films-list__title">Top rated</h2>

      <div class="films-list__container films-list__container--rated">
      </div>
    </section>`
  );
};

const createCommentedContainer = () => {
  return (
    `<section class="films-list--extra films-list--commented">
      <h2 class="films-list__title">Most commented</h2>

      <div class="films-list__container films-list__container--commented">
      </div>
    </section>`
  );
};

export default class Films {
  constructor(type) {
    this._type = type;

    this._template = null;
    this._element = null;
  }

  getTemplate() {
    if (!this._element) {
      switch (this._type) {
        case `rated`:
          this._template = createRatedContainer();
          break;

        case `commented`:
          this._template = createCommentedContainer();
          break;

        default:
          this._template = createMainContainer();
          break;
      }
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
