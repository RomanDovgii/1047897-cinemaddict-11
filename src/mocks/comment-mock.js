import {generateRandomIntegerNumber, userNames, emojiDescription, fishText, generateArrayFromString, getRandomDate} from "../utils.js";

const max = 9;
const commentTexts = generateArrayFromString(fishText);

export const generateComments = () => {
  const commentsCount = generateRandomIntegerNumber(0, max);
  let comments = [];

  for (let i = 0; i < commentsCount; i++) {
    let comment = createComment();

    comments.push(comment);
  }

  return comments;
};

const createComment = () => {
  return {
    author: userNames[generateRandomIntegerNumber(0, userNames.length)],
    text: commentTexts[generateRandomIntegerNumber(0, commentTexts.length)],
    emotionDescription: emojiDescription[generateRandomIntegerNumber(0, emojiDescription.length)],
    date: getRandomDate(),
  };
};
