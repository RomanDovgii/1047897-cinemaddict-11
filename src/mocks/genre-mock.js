import {genres, generateRandomIntegerNumber} from "../utils.js";

const maxGenres = 5;

export const generateGenres = () => {
  let genresLocal = [];
  const numberOfGenres = generateRandomIntegerNumber(1, maxGenres);

  for (let i = 0; i < numberOfGenres; i++) {
    genresLocal.push(genres[generateRandomIntegerNumber(1, genres.length)]);
  }

  return genresLocal;
};
