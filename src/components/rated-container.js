export const createTopRatedContainer = (cards) => {
  return (
    `<section class="films-list--extra films-list--rated">
      <h2 class="films-list__title">Top rated</h2>

      <div class="films-list__container films-list__container--rated">
        ${cards}
      </div>
    </section>`
  );
};
