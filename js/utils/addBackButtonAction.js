import {render} from '../data/game';

const renderGreeting = (game) => {
  game.setType(`greeting`);
  render();
};

export default (renderedScreen, game) => {
  const backButton = renderedScreen.querySelector(`.back`);
  backButton.addEventListener(`click`, () => renderGreeting(game));
};
