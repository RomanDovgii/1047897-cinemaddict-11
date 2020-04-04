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
let moviesAll;
let moviesRated;
let moviesCommented;
let moviesAllContainer;
let moviesRatedContainer;
let moviesCommentedContainer;

const createCards = (template, counter) => {
  let card = template;
  let cards = ``;
  for (let i = 0; i < counter; i++) {
    cards = cards + card;
  }
  return cards;
};

const render = (container, template, position) => {
  container.insertAdjacentHTML(position, template);
};

moviesAll = createCards(createMovieCardTemplate(), moviesToRender);
moviesRated = createCards(createMovieCardTemplate(), extraMoviesToRender);
moviesCommented = createCards(createMovieCardTemplate(), extraMoviesToRender);

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
moviesAllContainer = films.querySelector(`.films-list__container--all`);
moviesRatedContainer = films.querySelector(`.films-list__container--rated`);
moviesCommentedContainer = films.querySelector(`.films-list__container--commented`);

render(filmsList, createShowMoreButton(), Positions.BEFORE_END);

render(moviesAllContainer, moviesAll, Positions.BEFORE_END);
render(moviesRatedContainer, moviesRated, Positions.BEFORE_END);
render(moviesCommentedContainer, moviesCommented, Positions.BEFORE_END);

render(body, createInfoPopup(), Positions.BEFORE_END);
