import {createElement} from "../utils.js";

const createNumber = (number) => {
  return (
    `<section class="footer__statistics">
      <p>${number} movies inside</p>
    </section>`
  );
};

export default class Statistics {
  getStatistics(randomNumber) {
    return createElement(createNumber(randomNumber));
  }
}
