import UserRank from "./components/user-rank.js";
import SortMenu from "./components/sort-menu.js";
import MoviesContainer from "./components/movies-container.js";
import Statistics from "./components/statistics.js";
import Films from "./components/films.js";
import MoreButton from "./components/more-button.js";
import Popup from "./components/popup.js";
import Menu from "./components/menu.js";
import Card from "./components/card.js";

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
let popup;

const createCards = (movies) => {
  let fragment = document.createDocumentFragment();

  movies.forEach((element) => {
    let card = new Card(element);
    fragment.append(card.getElement());
    card.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, (evt) => {
      showCard(evt, element);
    });
    card.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, (evt) => {
      showCard(evt, element);
    });
    card.getElement().querySelector(`.film-card__title`).addEventListener(`click`, (evt) => {
      showCard(evt, element);
    });
  });

  return fragment;
};

moviesAll = createCards(readyMocks.slice(0, moviesToRender));
moviesRated = createCards(arraySorterByRaiting(readyMocks).slice(0, additionalMoviesToRender));
moviesCommented = createCards(arraySorterByComments(readyMocks).slice(0, additionalMoviesToRender));

render(header, new UserRank(`Movie Buff`).getElement(), Positions.BEFORE_END);
render(main, new Menu(readyMocks).getElement(), Positions.BEFORE_END);
render(main, new SortMenu().getElement(), Positions.BEFORE_END);
render(main, new MoviesContainer().getElement(), Positions.BEFORE_END);
render(footer, new Statistics(generateRandomIntegerNumber()).getElement(), Positions.BEFORE_END);

films = document.querySelector(`.films`);

render(films, new Films().getElement(), Positions.BEFORE_END);
render(films, new Films(SpecialContainers.RATED).getElement(), Positions.BEFORE_END);
render(films, new Films(SpecialContainers.COMMENTED).getElement(), Positions.BEFORE_END);

let moviesAllContainer = document.querySelector(`.films-list__container--all`);
let moviesRatedContainer = document.querySelector(`.films-list__container--rated`);
let moviesCommentedContainer = document.querySelector(`.films-list__container--commented`);

render(moviesAllContainer, moviesAll, Positions.BEFORE_END);
render(moviesRatedContainer, moviesRated, Positions.BEFORE_END);
render(moviesCommentedContainer, moviesCommented, Positions.BEFORE_END);

filmsList = films.querySelector(`.films-list`);

let moreButton = new MoreButton();

render(filmsList, moreButton.getElement(), Positions.BEFORE_END);

let showingCards = moviesToRender;
const allContainer = document.querySelector(`.films-list__container--all`);


moreButton.getElement().addEventListener(`click`, () => {
  let prevCardsCount = showingCards;
  showingCards += moviesToRenderButton;

  render(allContainer, createCards(readyMocks.slice(prevCardsCount, showingCards)), `beforeend`);

  if (showingCards >= readyMocks.length) {
    moreButton.removeElement();
  }
});


const removePopup = () => {
  popup.removeElement();
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


const showCard = (evt, movie) => {
  evt.stopPropagation();

  if (popup) {
    popup.removeElement();
    popup.removeElement();
  }

  popup = new Popup(movie);

  render(body, popup.getElement(), Positions.BEFORE_END);

  popup.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, () => {
    popup.removeElement();
  });

  if (popup) {
    document.addEventListener(`click`, documentClickHandler);
    document.addEventListener(`keydown`, documentEscKeydownHandler);
  }
};
