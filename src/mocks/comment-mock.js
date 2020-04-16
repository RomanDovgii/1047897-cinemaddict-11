import {generateRandomIntegerNumber} from "../utils.js";

const max = 9;

export const generateComments = () => {
  const commentsCount = generateRandomIntegerNumber(0, max);
  let comments = [];

  for (let i = 0; i < commentsCount; i++) {
    let comment = {};
    comment.author = `f`;
    comment.text = ``;
    comment.emotionPath = ``;
    comment.emotionDescription = ``;
    comment.date = ``;

    comments.push(comment);
  }

  return comments;
};
