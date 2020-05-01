import {createElement} from "../utils.js";

const createNumber = (number) => {
  return (
    `<section class="footer__statistics">
      <p>${number} movies inside</p>
    </section>`
  );
};

export default class Statistics {
  constructor(randomNumber) {
    this._number = randomNumber;

    this._element = null;
  }

  getTemplate() {
    return createNumber(this._number);
  }

  getElement() {
    this._element = createElement(this.getTemplate());

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
