export const createComment = (comment) => {
  const {commentAuthor, commentText, commentEmotionPath, commentEmotionDescription, commentDays} = comment;
  let commentDaysWord;

  commentDaysWord = commentDays > 1 ? `days ago` : `day ago`;

  return (`
    <li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="${commentEmotionPath}" width="55" height="55" alt="${commentEmotionDescription}">
    </span>
    <div>
      <p class="film-details__comment-text">${commentText}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${commentAuthor}</span>
        <span class="film-details__comment-day">${commentDays} ${commentDaysWord}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
    </li>
  `);
};
