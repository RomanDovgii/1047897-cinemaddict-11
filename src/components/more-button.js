import {createElement} from "../utils.js";

const createMoreButton = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

export default class MoreButton {
  getMoreButton() {
    return createElement(createMoreButton());
  }
}
