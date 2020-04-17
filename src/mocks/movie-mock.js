import {movieNames, fishText, generateArrayFromString, PosterNames, MovieDates, ImageTypes, MovieDuration, generatePath} from "../utils.js";
import {generateGenres} from "./genre-mock.js";
import {generateComments} from "./comment-mock.js";
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
  movieMockTemplate.country = `USA`;
  movieMockTemplate.duration = generateMovieDuration(movieObjectName);
  movieMockTemplate.esrbRaiting = `18+`;
  movieMockTemplate.genre = generateGenres();
  movieMockTemplate.raiting = generateMovieRaiting();
  movieMockTemplate.description = generateMovieDescription();
  movieMockTemplate.comments = generateComments();
  movieMockTemplate.isWatchlist = Math.random() >= 0.5;
  movieMockTemplate.isWatched = Math.random() >= 0.5;
  movieMockTemplate.isFavorite = Math.random() >= 0.5;

  mocks.push(movieMockTemplate);
}

export const readyMocks = mocks;
