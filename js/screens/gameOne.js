import {appendChildToMain} from '../utils/appendChildToMain';
import {buttonsTemplate, gameElement} from '../domElement/game';
import {renderNextScreen} from '../data/game';

export const data = {
  image: {
    width: 705,
    height: 455
  },
  gameContentClass: `game__content--wide`,
  answerClass: `game__answer--wide`,
  getButtons(i) {
    return buttonsTemplate(this.answerClass, i);
  }
};

export const renderScreen = (game) => {
  const renderedScreen = appendChildToMain(gameElement(game.getType(), data));

  const form = renderedScreen.querySelector(`.game__content`);
  const answers = renderedScreen.querySelectorAll(`input[name="question1"]`);
  form.addEventListener(`click`, () => {
    answers.forEach((answer) => {
      if (answer.checked) {
        game.setAnswer(answer.value);
        renderNextScreen();
      }
    });
  });
};
