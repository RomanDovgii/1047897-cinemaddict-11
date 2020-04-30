import {createElement} from "../utils.js";

const movieContainer = `<section class="films"></section>`;

export default class MoviesContainer {
  getMoviesContainer() {
    return createElement(movieContainer);
  }
}
