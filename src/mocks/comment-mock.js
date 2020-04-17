import {generateRandomIntegerNumber, userNames, ImageTypes, emojiDescription, fishText, generateArrayFromString, generatePath, getRandomDate} from "../utils.js";

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
  let obj = {};
  obj.author = userNames[generateRandomIntegerNumber(0, userNames.length)];
  obj.text = commentTexts[generateRandomIntegerNumber(0, commentTexts.length)];
  obj.emotionDescription = emojiDescription[generateRandomIntegerNumber(0, emojiDescription.length)];
  let imageName = obj.emotionDescription.split(`emoji-`)[1];
  obj.emotionPath = generatePath(ImageTypes.EMOJI, imageName);
  obj.date = getRandomDate();
  return obj;
};
