import AbstractView from '../abstract-view';

export default class GameThreeView extends AbstractView {
  constructor(level, statsBar) {
    super();
    this.level = level;
    this.statsBar = statsBar;
  }

  onAnswer() {
  }

  bind() {
    const finalAnswer = new Array(3).fill(`photo`);
    const answers = this.element.querySelectorAll(`.game__option`);
    answers.forEach((answer, i) => {
      answer.addEventListener(`click`, () => {
        finalAnswer.splice(i, 1, `paint`);
        const isCorrect = this.level.questions.every((question, j) => question.correctAnswer === finalAnswer[j]);
        this.onAnswer(isCorrect);
      });
    });
  }

  get template() {
    return `
      <div class="game">
        <p class="game__task">${this.level.task}</p>
        <form class="game__content  game__content--triple">
        ${this.level.questions.map((question) => `
          <div class="game__option">
            <img src=${question.src} alt="Option 1" 
                 width=${question.imageWidth} 
                 height=${question.imageHeight}>
          </div>
        `).join(``)}
        </form>
        <div class="stats">
          <ul class="stats">
            ${this.statsBar}
          </ul>
        </div>
      </div>
  `;
  }
}

