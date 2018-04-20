import {cleanScreen, render} from '../utils/render';
import addBackButtonAction from '../utils/addBackButtonAction';
import {footerTemplate} from '../templates/footer';
import {headerTemplate} from '../templates/header';
import {games, gameTypes} from '../data/data';
import {statsTemplate} from '../templates/stats';
import {gameContentTemplate, buttonsTemplate} from '../templates/game';
import {renderNextGame} from '../utils/renderGameScreen';
import {getDomElementFromTemplate} from '../utils/getDomElementFromTemplate';

export const gameTwoData = {
  image: {
    width: 468,
    height: 458
  },
  getButtons(i) {
    return buttonsTemplate(``, i);
  }
};

export const renderGameTwo = (state) => {
  cleanScreen();
  const header = render(getDomElementFromTemplate(headerTemplate(state)));
  const renderedScreen = render(getDomElementFromTemplate(gameContentTemplate(games[gameTypes.GAME_TWO], gameTwoData)));
  render(getDomElementFromTemplate(statsTemplate(state)));
  render(getDomElementFromTemplate(footerTemplate));
  addBackButtonAction(header);

  const answers1 = renderedScreen.querySelectorAll(`input[name="question1"]`);
  const answers2 = renderedScreen.querySelectorAll(`input[name="question2"]`);
  let isQuestion1Answered = false;
  let isQuestion2Answered = false;
  const form = renderedScreen.querySelector(`.game__content`);
  form.addEventListener(`click`, () => {
    answers1.forEach((answer1) => {
      if (answer1.checked) {
        isQuestion1Answered = true;
        if (!games[gameTypes.GAME_TWO].questions[0].answers[answer1.value]) {
          state.lives--;
          state.setAnswer(false, state.time);
          renderNextGame(state);
        }
      }
    });
    answers2.forEach((answer2) => {
      if (answer2.checked) {
        isQuestion2Answered = true;
        if (!games[gameTypes.GAME_TWO].questions[1].answers[answer2.value]) {
          state.lives--;
          state.setAnswer(false, state.time);
          renderNextGame(state);
        }
      }
    });
    if (isQuestion1Answered && isQuestion2Answered) {
      state.setAnswer(true, state.time);
      renderNextGame(state);
    }
  });
};
