import UserRank from "./components/user-rank.js";
import SortMenu from "./components/sort-menu.js";
import MoviesContainer from "./components/movies-container.js";
import Statistics from "./components/statistics.js";
import Films from "./components/films.js";
import MoreButton from "./components/more-button.js";
import Popup from "./components/popup.js";
import Menu from "./components/menu.js";
import Cards from "./components/cards.js";

import {generateRandomIntegerNumber, arraySorterByRaiting, arraySorterByComments, Keycodes, SpecialContainers, render} from "./utils.js";

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

moviesAll = new Cards(readyMocks, 0, moviesToRender).getTemplate();
moviesRated = new Cards(arraySorterByRaiting(readyMocks), 0, additionalMoviesToRender).getTemplate();
moviesCommented = new Cards(arraySorterByComments(readyMocks), 0, additionalMoviesToRender).getTemplate();

render(header, new UserRank(`Movie Buff`).getElement(), Positions.BEFORE_END);
render(main, new Menu(readyMocks).getElement(), Positions.BEFORE_END);
render(main, new SortMenu().getElement(), Positions.BEFORE_END);
render(main, new MoviesContainer().getElement(), Positions.BEFORE_END);
render(footer, new Statistics(generateRandomIntegerNumber()).getElement(), Positions.BEFORE_END);

films = document.querySelector(`.films`);

render(films, new Films(moviesAll).getElement(), Positions.BEFORE_END);
render(films, new Films(moviesRated, SpecialContainers.RATED).getElement(), Positions.BEFORE_END);
render(films, new Films(moviesCommented, SpecialContainers.COMMENTED).getElement(), Positions.BEFORE_END);

filmsList = films.querySelector(`.films-list`);

render(filmsList, new MoreButton().getElement(), Positions.BEFORE_END);

let moreButton = document.querySelector(`.films-list__show-more`);
let showingCards = moviesToRender;
const allContainer = document.querySelector(`.films-list__container--all`);
const topContainer = document.querySelector(`.films-list__container--rated`);
const commentedContainer = document.querySelector(`.films-list__container--commented`);

// events

moreButton.addEventListener(`click`, () => {
  let prevCardsCount = showingCards;
  showingCards += moviesToRenderButton;

  render(allContainer, new Cards(readyMocks, prevCardsCount, showingCards).getElement(), `beforeend`);

  if (showingCards >= readyMocks.length) {
    moreButton.remove();
  }
});

const removePopup = () => {
  const popup = document.querySelector(`.film-details`);

  popup.remove();
  document.removeEventListener(`click`, documentClickHandler);
  document.removeEventListener(`keydown`, documentEscKeydownHandler);
};

const documentClickHandler = (evt) => {
  let eventTarget = evt.target;
  if ((!eventTarget.closest(`.film-details`))) {
    removePopup();
  }
};

const documentEscKeydownHandler = (evt) => {
  if (evt.keyCode === Keycodes.ESC) {
    removePopup();
  }
};

const initiatePopup = (evt) => {
  evt.stopPropagation();
  const popup = document.querySelector(`.film-details`);
  const closePopup = popup.querySelector(`.film-details__close-btn`);
  closePopup.addEventListener(`click`, () => {
    removePopup();
  });
  if (popup) {
    document.addEventListener(`click`, documentClickHandler);
    document.addEventListener(`keydown`, documentEscKeydownHandler);
  }
};

const showCard = (evt, array) => {
  evt.stopPropagation();
  let eventTarget = evt.target.closest(`article`);
  if (eventTarget) {
    const popup = document.querySelector(`.film-details`);
    if (popup) {
      popup.remove();
    }
    render(body, new Popup(array.find((element) => (element.id.toString() === eventTarget.id))).getElement(), Positions.BEFORE_END);
    initiatePopup(evt);
  }
};

allContainer.addEventListener(`click`, (evt) => {
  showCard(evt, readyMocks);
});

topContainer.addEventListener(`click`, (evt) => {
  showCard(evt, arraySorterByRaiting(readyMocks));
});

commentedContainer.addEventListener(`click`, (evt) => {
  showCard(evt, arraySorterByComments(readyMocks));
});
