export const createSortButton = (button) => {
  const {name, isActive} = button;
  const activeClass = `sort__button--active`;
  return (
    `<li><a href="#" class="sort__button ${isActive ? activeClass : ``}">Sort by ${name}</a></li>`
  );
};
