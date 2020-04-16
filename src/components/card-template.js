export const createMovieCardTemplate = (movies, from, to) => {
  let cards = ``;
  let moviesForRender = movies.slice(from, to);
  moviesForRender.forEach((element) => {
    const {name, poster, year, duration, genre, raiting, description, comments, isWatchlist, isWatched, isFavorite} = element;
    let activeClass = ` film-card__controls-item--active`;
    cards += `<article class="film-card">
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
  });
  return cards;
};
