import {cleanScreen, render} from '../utils/render';
import addBackButtonAction from '../utils/addBackButtonAction';
import {headerTemplate} from '../templates/header';
import {footerTemplate} from '../templates/footer';
import {initialState} from '../data/data';
import {renderRandomGame} from '../utils/renderGameScreen';
import {getDomElementFromTemplate} from '../utils/getDomElementFromTemplate';


const rulesTemplate = `
<div class="rules">
  <h1 class="rules__title">Правила</h1>
  <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
    src="img/photo_icon.png" width="16" height="16"> или рисунок <img
    src="img/paint_icon.png" width="16" height="16" alt="">.<br>
    Фотографиями или рисунками могут быть оба изображения.<br>
    На каждую попытку отводится 30 секунд.<br>
    Ошибиться можно не более 3 раз.<br>
    <br>
    Готовы?
  </p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
</div>
`;

export const renderRulesScreen = () => {
  cleanScreen();
  const newState = Object.assign({}, initialState);
  newState.answers.length = 0;
  const header = render(getDomElementFromTemplate(headerTemplate(newState, true)));
  const renderedScreen = render(getDomElementFromTemplate(rulesTemplate));
  render(getDomElementFromTemplate(footerTemplate));

  const nextButton = renderedScreen.querySelector(`.rules__button`);
  const input = renderedScreen.querySelector(`.rules__input`);
  addBackButtonAction(header);

  input.addEventListener(`keyup`, (() => {
    if (input.value === ``) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  }));
  nextButton.addEventListener(`click`, renderRandomGame(newState));
};
