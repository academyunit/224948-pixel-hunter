import {appendChildToMain} from '../utils/appendChildToMain';
import {gameElement} from '../domElement/game';
import {renderNextScreen} from '../data/game';

export const data = {
  image: {
    width: 304,
    height: 455
  },
  gameContentClass: `game__content--triple`
};

export const renderScreen = (game) => {
  const renderedScreen = appendChildToMain(gameElement(game.getType(), data));
  const finalAnswer = new Array(3).fill(`photo`);
  const answers = renderedScreen.querySelectorAll(`.game__option`);
  answers.forEach((answer, i) => {
    answer.addEventListener(`click`, () => {
      finalAnswer.splice(i, 1, `paint`);
      game.setAnswer(finalAnswer);
      renderNextScreen();
    });
  });
};

