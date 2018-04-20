import {cleanScreen, render} from '../utils/render';
import addBackButtonAction from '../utils/addBackButtonAction';
import {footerTemplate} from '../templates/footer';
import {headerTemplate} from '../templates/header';
import {games, gameTypes} from '../data/data';
import {renderNextGame} from '../utils/renderGameScreen';
import {statsTemplate} from '../templates/stats';
import {buttonsTemplate, gameContentTemplate} from '../templates/game';
import {getDomElementFromTemplate} from '../utils/getDomElementFromTemplate';

export const gameOneData = {
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

export const renderGameOne = (state) => {
  cleanScreen();
  const header = render(getDomElementFromTemplate(headerTemplate(state)));
  const renderedScreen = render(getDomElementFromTemplate(gameContentTemplate(games[gameTypes.GAME_ONE], gameOneData)));
  render(getDomElementFromTemplate(statsTemplate(state)));
  render(getDomElementFromTemplate(footerTemplate));
  addBackButtonAction(header);

  const form = renderedScreen.querySelector(`.game__content`);
  const answers = renderedScreen.querySelectorAll(`input[name="question1"]`);
  form.addEventListener(`click`, () => {
    answers.forEach((answer) => {
      if (answer.checked) {
        if (!games[gameTypes.GAME_ONE].questions[0].answers[answer.value]) {
          state.lives--;
        }
        state.setAnswer(games[gameTypes.GAME_ONE].questions[0].answers[answer.value], state.time);
        renderNextGame(state);
      }
    });
  });
};
