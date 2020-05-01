import {generateMovieObjectName, generatePosterPath, generateMovieYear, generateMovieDuration, createElement} from "../utils.js";

const createMovieCardTemplate = (movie) => {
  const {name, id, genre, raiting, description, comments, isWatchlist, isWatched, isFavorite} = movie;
  let movieObjectName = generateMovieObjectName(name);
  let poster = generatePosterPath(movieObjectName);
  let year = generateMovieYear(movieObjectName);
  let duration = generateMovieDuration(movieObjectName);

  let activeClass = ` film-card__controls-item--active`;
  return `<article class="film-card" id="${id}">
        <h3 class="film-card__title">${name}</h3>
        <p class="film-card__rating">${raiting}</p>
        <p class="film-card__info">
          <span class="film-card__year">${year.getFullYear()}</span>
          <span class="film-card__duration">${duration}</span>
          <span class="film-card__genre">${genre[0]}</span>
        </p>
        <img src="${poster}" alt="" class="film-card__poster">
        <p class="film-card__description">${description}</p>
        <a class="film-card__comments">${comments.length} comments</a>
        <form class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isWatchlist ? activeClass : ``}">Add to watchlist</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isWatched ? activeClass : ``}">Mark as watched</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavorite ? activeClass : ``}">Mark as favorite</button>
        </form>
      </article>`;
};

class Card {
  constructor(movie) {
    this._movie = movie;

    this._element = null;
  }

  getTemplate() {
    const {name, id, genre, raiting, description, comments, isWatchlist, isWatched, isFavorite} = this._movie;
    let movieObjectName = generateMovieObjectName(name);
    let poster = generatePosterPath(movieObjectName);
    let year = generateMovieYear(movieObjectName);
    let duration = generateMovieDuration(movieObjectName);

    let activeClass = ` film-card__controls-item--active`;
    return `<article class="film-card" id="${id}">
          <h3 class="film-card__title">${name}</h3>
          <p class="film-card__rating">${raiting}</p>
          <p class="film-card__info">
            <span class="film-card__year">${year.getFullYear()}</span>
            <span class="film-card__duration">${duration}</span>
            <span class="film-card__genre">${genre[0]}</span>
          </p>
          <img src="${poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${description}</p>
          <a class="film-card__comments">${comments.length} comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isWatchlist ? activeClass : ``}">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isWatched ? activeClass : ``}">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavorite ? activeClass : ``}">Mark as favorite</button>
          </form>
        </article>`;
  }

  getElement() {
    this._element = createElement(this.getTemplate());
    console.log(this._element);
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

export default class Cards {
  constructor(movies, from, to) {
    this._movies = movies;
    this._from = from;
    this._to = to;

    this._element = null;
  }

  getTemplate() {
    let moviesForRender = this._movies.slice(this._from, this._to);
    return moviesForRender.reduce((total, element) => total + new Card(element).getElement(), ` `);
  }

  getElement() {
    let fragment = document.createDocumentFragment();
    fragment.append(this.getTemplate());
    console.log(this.getTemplate());
    let range = document.createRange();
    this._element = range.createContextualFragment(this.getTemplate());
    return fragment;
  }

  removeElement() {
    this.element = null;
  }
}
