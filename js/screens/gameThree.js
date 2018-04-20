import {cleanScreen, render} from '../utils/render';
import addBackButtonAction from '../utils/addBackButtonAction';
import {footerTemplate} from '../templates/footer';
import {headerTemplate} from '../templates/header';
import {games, gameTypes} from '../data/data';
import {statsTemplate} from '../templates/stats';
import {gameContentTemplate} from '../templates/game';
import {getDomElementFromTemplate} from '../utils/getDomElementFromTemplate';
import {renderNextGame} from '../utils/renderGameScreen';

export const gameThreeData = {
  image: {
    width: 304,
    height: 455
  },
  gameContentClass: `game__content--triple`
};

export const renderGameThree = (state) => {
  cleanScreen();
  const header = render(getDomElementFromTemplate(headerTemplate(state)));
  const renderedScreen = render(
      getDomElementFromTemplate(
          gameContentTemplate(games[gameTypes.GAME_THREE], gameThreeData)
      )
  );
  render(getDomElementFromTemplate(statsTemplate(state)));
  render(getDomElementFromTemplate(footerTemplate));
  addBackButtonAction(header);

  const answers = renderedScreen.querySelectorAll(`.game__option`);
  answers.forEach((answer, i) => {
    answer.addEventListener(`click`, () => {
      if (!games[gameTypes.GAME_THREE].questions[i].answer) {
        state.lives--;
      }
      state.setAnswer(games[gameTypes.GAME_THREE].questions[i].answer, state.time);
      renderNextGame(state);
    });
  });
};

