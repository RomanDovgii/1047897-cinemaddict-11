export const fishText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

export const movieNames = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `The great Flamarion`,
  `Made for Each Other`,
];

export const navigationTypes = [
  `All`,
  `Watchlist`,
  `History`,
  `Favorites`
];

export const sortTypes = [
  `default`,
  `date`,
  `raiting`,
];

export const MovieDates = {
  THE_DANCE_OF_LIFE: new Date(`1929-01-26`),
  SAGEBRUSH_TRAIL: new Date(`1933-01-26`),
  THE_MAN_WITH_THE_GOLDEN_ARM: new Date(`1955-01-26`),
  SANTA_CLAUS_CONQUERS_THE_MARTIANS: new Date(`1964-01-26`),
  POPEYE_THE_SAILOR_MEETS_SINDBAD_THE_SAILOR: new Date(`1936-01-26`),
  THE_GREAT_FLAMARION: new Date(`1945-01-26`),
  MADE_FOR_EACH_OTHER: new Date(`1939-01-26`),
};

export const MovieDuration = {
  THE_DANCE_OF_LIFE: 115,
  SAGEBRUSH_TRAIL: 54,
  THE_MAN_WITH_THE_GOLDEN_ARM: 119,
  SANTA_CLAUS_CONQUERS_THE_MARTIANS: 81,
  POPEYE_THE_SAILOR_MEETS_SINDBAD_THE_SAILOR: 16,
  THE_GREAT_FLAMARION: 78,
  MADE_FOR_EACH_OTHER: 92,
};

export const MovieGenre = {
  THE_DANCE_OF_LIFE: 115,
  SAGEBRUSH_TRAIL: 54,
  THE_MAN_WITH_THE_GOLDEN_ARM: 119,
  SANTA_CLAUS_CONQUERS_THE_MARTIANS: 81,
  POPEYE_THE_SAILOR_MEETS_SINDBAD_THE_SAILOR: 16,
  THE_GREAT_FLAMARION: 78,
  MADE_FOR_EACH_OTHER: 92,
};

export const PosterNames = {
  THE_DANCE_OF_LIFE: `the-dance-of-life.jpg`,
  SAGEBRUSH_TRAIL: `sagebrush-trail.jpg`,
  THE_MAN_WITH_THE_GOLDEN_ARM: `the-man-with-the-golden-arm.jpg`,
  SANTA_CLAUS_CONQUERS_THE_MARTIANS: `santa-claus-conquers-the-martians.jpg`,
  POPEYE_THE_SAILOR_MEETS_SINDBAD_THE_SAILOR: `popeye-meets-sinbad.png`,
  THE_GREAT_FLAMARION: `the-great-Flamarion.jpg`,
  MADE_FOR_EACH_OTHER: `made-for-each-other.png`,
};

export const ImageTypes = {
  POSTER: `posters`,
  ICON: `icons`,
  EMOJI: `emoji`,
};

export const generateRandomIntegerNumber = (min, max) => {
  min = !min ? min = 0 : min = min;
  max = !max ? max = 1000000 : max = max;
  return Math.floor(Math.random() * (max - min)) + min;
};

export const generatePath = (type, imageName) => {
  const mainImagesPath = `./images`;
  let path = ``;
  switch (type) {
    case `posters`:
      path += `${mainImagesPath}/${ImageTypes.POSTER}/${imageName}`;
      break;
    case `icons`:
      path += `${mainImagesPath}/${ImageTypes.ICON}/${imageName}.svg`;
      break;
    case `emoji`:
      path += `${mainImagesPath}/${ImageTypes.EMOJI}/${imageName}.png`;
      break;
    default:
      path += mainImagesPath;
      break;
  }

  return path;
};

export const arraySorterByRaiting = (array) => {
  return array.slice().sort((a, b) => {
    return b.raiting - a.raiting;
  });
};

export const arraySorterByComments = (array) => {
  return array.slice().sort((a, b) => {
    return b.comments.length - a.comments.length;
  });
};
