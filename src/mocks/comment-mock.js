import {generateRandomIntegerNumber, userNames, ImageTypes, emojiDescription, fishText, generateArrayFromString, generatePath, getRandomDate} from "../utils.js";

const max = 9;
const commentTexts = generateArrayFromString(fishText);

export const generateComments = () => {
  const commentsCount = generateRandomIntegerNumber(0, max);
  let comments = [];

  for (let i = 0; i < commentsCount; i++) {
    let comment = {};
    comment.author = userNames[generateRandomIntegerNumber(0, userNames.length)];
    comment.text = commentTexts[generateRandomIntegerNumber(0, commentTexts.length)];
    comment.emotionDescription = emojiDescription[generateRandomIntegerNumber(0, emojiDescription.length)];
    let imageName = comment.emotionDescription.split(`emoji-`)[1];
    comment.emotionPath = generatePath(ImageTypes.EMOJI, imageName);
    comment.date = getRandomDate();

    comments.push(comment);
  }

  return comments;
};
