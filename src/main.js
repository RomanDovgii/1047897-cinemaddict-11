import {createUserRank} from "./components/userRank.js";
import {createMenu} from "./components/menu.js";
import {createSortMenu} from "./components/sortMenu.js";
import {createMoviesContainer} from "./components/moviesContainer.js";
import {createStatistics} from "./components/statistics.js";
import {createAllContainer} from "./components/allContainer.js";
import {createTopRatedContainer} from "./components/topRatedContainer.js";
import {createMostCommentedContainer} from "./components/mostCommentedContainer.js";
import {createShowMoreButton} from "./components/showMoreButton.js";
import {createInfoPopup} from "./components/infoPopup.js";
import {createMovieCardTemplate} from "./components/movieCardTemplate.js";

const moviesToRender = 5;
const extraMoviesToRender = 2;

const body = document.querySelector(`body`);
const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);
const footer = document.querySelector(`.footer`);

const Positions = {
  BEFORE_BEGIN: `beforebegin`,
  AFTER_BEGIN: `afterbegin`,
  BEFORE_END: `beforeend`,
  AFTER_END: `afterend`
};

let films;
let filmsList;
let topRated;
let mostCommented;
let filmsContainer;
let topRatedContainer;
let mostCommentedContainer;

const render = (container, template, position) => {
  container.insertAdjacentHTML(position, template);
};

const cardsRender = (container, counter) => {
  for (let i = 0; i < counter; i++) {
    render(container, createMovieCardTemplate(), Positions.BEFORE_END);
  }
};

render(header, createUserRank(), Positions.BEFORE_END);
render(main, createMenu(), Positions.BEFORE_END);
render(main, createSortMenu(), Positions.BEFORE_END);
render(main, createMoviesContainer(), Positions.BEFORE_END);
render(footer, createStatistics(), Positions.BEFORE_END);

films = document.querySelector(`.films`);

render(films, createAllContainer(), Positions.BEFORE_END);
render(films, createTopRatedContainer(), Positions.BEFORE_END);
render(films, createMostCommentedContainer(), Positions.BEFORE_END);

filmsList = films.querySelector(`.films-list`);
topRated = films.querySelector(`.films-list--rated`);
mostCommented = films.querySelector(`.films-list--commented`);
filmsContainer = filmsList.querySelector(`.films-list__container`);
topRatedContainer = topRated.querySelector(`.films-list__container`);
mostCommentedContainer = mostCommented.querySelector(`.films-list__container`);

render(filmsList, createShowMoreButton(), Positions.BEFORE_END);

cardsRender(filmsContainer, moviesToRender);
cardsRender(topRatedContainer, extraMoviesToRender);
cardsRender(mostCommentedContainer, extraMoviesToRender);

render(body, createInfoPopup(), Positions.BEFORE_END);
