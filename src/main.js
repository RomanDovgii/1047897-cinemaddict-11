import {createUserRank} from "./components/user-rank.js";
import {createMenu} from "./components/menu.js";
import {createSortMenu} from "./components/sort-menu.js";
import {createMoviesContainer} from "./components/movies-container.js";
import {createStatistics} from "./components/statistics.js";
import {createAllContainer} from "./components/main-container.js";
import {createTopRatedContainer} from "./components/rated-container.js";
import {createMostCommentedContainer} from "./components/commented-container.js";
import {createShowMoreButton} from "./components/more-button.js";
import {createInfoPopup} from "./components/popup.js";
import {createMovieCards} from "./components/card-template.js";
import {createNavigationItems} from "./components/creator-navigation-items.js";
import {createSortButtons} from "./components/creator-sort-menu-buttons.js";

import {generateRandomIntegerNumber, arraySorterByRaiting, arraySorterByComments} from "./utils.js";

import {readyMocks} from "./mocks/movie-mock.js";

const moviesToRender = 5;
const additionalMoviesToRender = 2;
const moviesToRenderButton = 5;

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

// переписать
const createCards = (template) => {
  let cards = template;
  return cards;
};

const render = (container, template, position) => {
  container.insertAdjacentHTML(position, template);
};

moviesAll = createCards(createMovieCards(readyMocks, 0, moviesToRender), moviesToRender);
moviesRated = createCards(createMovieCards(arraySorterByRaiting(readyMocks), 0, additionalMoviesToRender), additionalMoviesToRender);
moviesCommented = createCards(createMovieCards(arraySorterByComments(readyMocks), 0, additionalMoviesToRender), additionalMoviesToRender);

render(header, createUserRank(`Movie Buff`), Positions.BEFORE_END);
render(main, createMenu(createNavigationItems(readyMocks)), Positions.BEFORE_END);
render(main, createSortMenu(createSortButtons()), Positions.BEFORE_END);
render(main, createMoviesContainer(), Positions.BEFORE_END);
render(footer, createStatistics(generateRandomIntegerNumber()), Positions.BEFORE_END);

films = document.querySelector(`.films`);

render(films, createAllContainer(moviesAll), Positions.BEFORE_END);
render(films, createTopRatedContainer(moviesRated), Positions.BEFORE_END);
render(films, createMostCommentedContainer(moviesCommented), Positions.BEFORE_END);

filmsList = films.querySelector(`.films-list`);

render(filmsList, createShowMoreButton(), Positions.BEFORE_END);

// render(body, createInfoPopup(), Positions.BEFORE_END);

let moreButton = document.querySelector(`.films-list__show-more`);
let showingCards = moviesToRender;
const allContainer = document.querySelector(`.films-list__container--all`);
const topContainer = document.querySelector(`.films-list__container--rated`);
const commentedContainer = document.querySelector(`.films-list__container--commented`);

let allCards = allContainer.querySelectorAll(`article`);
let topCards = topContainer.querySelectorAll(`article`);
let commentedCards = commentedContainer.querySelectorAll(`article`);

moreButton.addEventListener(`click`, () => {
  let prevCardsCount = showingCards;
  showingCards += moviesToRenderButton;

  render(allContainer, createCards(createMovieCards(readyMocks, prevCardsCount, showingCards), showingCards), `beforeend`);

  if (showingCards >= readyMocks.length) {
    moreButton.remove();
  }

  allCards = allContainer.querySelectorAll(`article`);
});

const initiatePopup = () => {
  const popup = document.querySelector(`.film-details`);
  const closePopup = popup.querySelector(`.film-details__close-btn`);
  closePopup.addEventListener(`click`, () => {
    popup.remove();
  });
};

const showCard = (evt, cards, array) => {
  let links = Array.prototype.slice.call(cards);
  let number = -2;
  let eventTarget = evt.target.closest(`article`);

  if (links.indexOf(eventTarget, -1)) {
    number = links.indexOf(eventTarget);
  }

  if (number >= 0) {
    render(body, createInfoPopup(array[number]), Positions.BEFORE_END);
    initiatePopup();
  }
};

allContainer.addEventListener(`click`, (evt) => {
  showCard(evt, allCards, readyMocks);
});

topContainer.addEventListener(`click`, (evt) => {
  showCard(evt, topCards, arraySorterByRaiting(readyMocks));
});

commentedContainer.addEventListener(`click`, (evt) => {
  showCard(evt, commentedCards, arraySorterByComments(readyMocks));
});
