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
  constructor(films) {
    this._films = films;
  }

  getMainContainer() {
    return createElement(createMainContainer(this._films));
  }

  getRatedContainer() {
    return createElement(createRatedContainer(this._films));
  }

  getCommentedContainer() {
    return createElement(createCommentedContainer(this._films));
  }
}
