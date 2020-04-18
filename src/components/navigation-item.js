const generateNumberElement = (num) => {
  return `<span class="main-navigation__item-count">${num}</span>`;
};

export const createNavigationItem = (item) => {
  const {name, isActive, number} = item;
  const activeClass = `main-navigation__item--active`;
  return (`<a href="#${name.toLowerCase()}" class="main-navigation__item ${isActive ? activeClass : ``}">${name} ${number ? generateNumberElement(number) : ``}</a>`);
};
