export const createMostCommentedContainer = (cards) => {
  return (
    `<section class="films-list--extra films-list--commented">
      <h2 class="films-list__title">Most commented</h2>

      <div class="films-list__container films-list__container--commented">
       ${cards}
      </div>
    </section>`
  );
};
