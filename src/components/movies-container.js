import {createElement} from "../../../1047897-taskmanager-11/src/utils";

const movieContainer = `<section class="films"></section>`;

export default class MoviesContainer {
  getMoviesContainer() {
    return createElement(movieContainer);
  }
}
