export const createNavigationItem = (item) => {
  const {name, isActive, number} = item;
  const activeClass = `main-navigation__item--active`;
  const numberElement = `<span class="main-navigation__item-count">${number}</span>`;
  return (`<a href="#${name.toLowerCase()}" class="main-navigation__item ${isActive ? activeClass : ``}">${name} ${number ? numberElement : ``}</a>`);
};
