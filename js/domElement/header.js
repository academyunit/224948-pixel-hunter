import {getDomElementFromTemplate} from '../utils/getDomElementFromTemplate';
import {levels} from '../data/data';

const timerTemplate = (time) => `
    <h1 class="game__timer">${time}</h1>
`;

const gameLivesTemplate = (lives) => `
    <div class="game__lives">
      ${new Array(3 - lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
              ${new Array(lives)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}      
    </div>
`;

export const headerElement = (game) => {
  const type = game.getType();
  const timer = game.getTimer();
  const lives = game.getLives();

  return getDomElementFromTemplate(`
    <header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
      ${levels[type].addGameIndicators ? timerTemplate(timer) : ``}
      ${levels[type].addGameIndicators ? gameLivesTemplate(lives) : ``}
    </header>
`);
};

