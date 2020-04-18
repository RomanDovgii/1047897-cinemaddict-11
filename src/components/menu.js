export const createMenu = (navigationItems) => {
  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${navigationItems}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};
