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

const form = (gameType, screenData) => `
<form class="game__content ${screenData.gameContentClass}">
    ${gameType.questions.map((question, i) => `
      <div class="game__option">
        <img src=${question.src} alt="Option ${i + 1}"
             width=${screenData.image.width}
             height=${screenData.image.height}>
        ${screenData.getButtons ? screenData.getButtons(i) : ``}
      </div>
    `).join(``)}
 </form>`;

export const gameContentTemplate = (gameType, screenData) => `
<div class="game">
  <p class="game__task">${gameType.task}</p>
  ${form(gameType, screenData)}
</div>
`;
