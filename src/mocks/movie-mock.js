import {movieNames, fishText, PosterNames, MovieDates, ImageTypes, MovieDuration, generatePath} from "../utils.js";

const numberOfMocks = 40;
const maxRaiting = 100;

let movieMockTemplate = {};

let movieObjectName;

// gets a random movie name
const generateMovieName = () => {
  return movieNames[Math.floor((Math.random() * movieNames.length) + 0)];
};

// generates object name for the movie
const generateMovieObjectName = (movieNameLocal) => {
  return movieNameLocal.toUpperCase().split(` `).join(`_`);
};

// generates poster path, depends on generateMovieName
const generatePosterPath = (movieObjectNameLocal) => {
  return generatePath(ImageTypes.POSTER, PosterNames[movieObjectNameLocal]);
};

// gets production year depends on generateMovieName
const generateMovieYear = (MovieObjectNameLocal) => {
  return MovieDates[MovieObjectNameLocal];
};

// calculates movie duration with the correct format
const generateMovieDuration = (MovieObjectNameLocal) => {
  let duration;
  let minutes = MovieDuration[MovieObjectNameLocal];

  duration = minutes < 60 ? `${minutes}m` : `${Math.floor(minutes / 60)}h ${minutes % 60}m`;

  return duration;
};

const generateArrayFromString = (string) => {
  return string.split(`. `);
};

// generates movie description
const generateMovieDescription = () => {
  const maxSentencesCount = 5;
  const descriptionSentencesArray = generateArrayFromString(fishText);
  let description = ``;

  for (let i = 0; i < maxSentencesCount; i++) {
    description += descriptionSentencesArray[Math.floor((Math.random() * descriptionSentencesArray.length) + 0)];
    description += `. `;
  }

  return description;
};

// generates movie raiting
const generateMovieRaiting = () => {
  return (Math.floor((Math.random() * maxRaiting) + 0)) / 10;
};

let mocks = [];

for (let i = 0; i < numberOfMocks; i++) {
  movieMockTemplate = {};

  movieMockTemplate.name = generateMovieName();
  movieObjectName = generateMovieObjectName(movieMockTemplate.name);
  movieMockTemplate.poster = generatePosterPath(movieObjectName);
  movieMockTemplate.year = generateMovieYear(movieObjectName);
  movieMockTemplate.duration = generateMovieDuration(movieObjectName);
  movieMockTemplate.genre = ``;
  movieMockTemplate.raiting = generateMovieRaiting();
  movieMockTemplate.description = generateMovieDescription();
  movieMockTemplate.comments = ``;
  movieMockTemplate.isWatchlist = true;
  movieMockTemplate.isWatched = true;
  movieMockTemplate.isFavorite = false;

  mocks.push(movieMockTemplate);
}

export const readyMocks = mocks;
