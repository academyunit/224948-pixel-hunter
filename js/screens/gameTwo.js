import {appendChildToMain} from '../utils/appendChildToMain';
import {buttonsTemplate, gameElement} from '../domElement/game';
import {renderNextScreen} from '../data/game';

export const data = {
  image: {
    width: 468,
    height: 458
  },
  getButtons(i) {
    return buttonsTemplate(``, i);
  }
};

export const renderScreen = (game) => {
  const renderedScreen = appendChildToMain(gameElement(game.getType(), data));

  const answers1 = renderedScreen.querySelectorAll(`input[name="question1"]`);
  const answers2 = renderedScreen.querySelectorAll(`input[name="question2"]`);
  const finalAnswer = [];
  let isQuestion1Answered = false;
  let isQuestion2Answered = false;

  answers1.forEach((answer1) => {
    answer1.addEventListener(`click`, () => {
      if (answer1.checked) {
        isQuestion1Answered = true;
        finalAnswer.push(answer1.value);
        if (isQuestion1Answered && isQuestion2Answered) {
          game.setAnswer(finalAnswer);
          renderNextScreen();
        }
      }
    });
  });

  answers2.forEach((answer2) => {
    answer2.addEventListener(`click`, () => {
      if (answer2.checked) {
        isQuestion2Answered = true;
        finalAnswer.push(answer2.value);
        if (isQuestion1Answered && isQuestion2Answered) {
          game.setAnswer(finalAnswer);
          renderNextScreen();
        }
      }
    });
  });
};
