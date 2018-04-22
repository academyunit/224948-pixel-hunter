import {getDomElementFromTemplate} from '../utils/getDomElementFromTemplate';
import {levels} from '../data/data';

export const buttonsTemplate = (answerClass, i) => `
  <label class="game__answer game__answer--photo ${answerClass}">
    <input name="question${i + 1}" type="radio" value="photo">
    <span>Фото</span>
  </label>
  <label class="game__answer  game__answer--paint ${answerClass}">
    <input name="question${i + 1}" type="radio" value="paint">
    <span>Рисунок</span>
  </label>
`;

export const gameElement = (gameType, data) => getDomElementFromTemplate(`
<div class="game">
  <p class="game__task">${levels[gameType].task}</p>
  <form class="game__content ${data.gameContentClass}">
    ${levels[gameType].questions.map((question, i) => `
      <div class="game__option">
        <img src=${question.src} alt="Option ${i + 1}"
             width=${data.image.width}
             height=${data.image.height}>
        ${data.getButtons ? data.getButtons(i) : ``}
      </div>
    `).join(``)}
 </form>
</div>
`);
