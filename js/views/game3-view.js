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
    const correctAnswers = this.level.answers;
    let paintingCount = 0;
    correctAnswers.forEach((answer) => {
      if (answer.type === `painting`) {
        paintingCount++;
      }
    });

    this.answers = this.element.querySelectorAll(`.game__option`);
    this.onAnswerClick = (i) => {
      let isCorrect;
      if (paintingCount === 1) {
        isCorrect = this.level.answers[i].type === `painting`;
      } else {
        isCorrect = this.level.answers[i].type === `photo`;
      }

      this.onAnswer(isCorrect);
    };

    this.answers.forEach((answer, i) => {
      answer.addEventListener(`click`, () => this.onAnswerClick(i));
    });
  }

  unbind() {
    this.answers.forEach((answer, i) => {
      answer.removeEventListener(`click`, () => this.onAnswerClick(i));
    });
  }

  get template() {
    return `
      <div class="game">
        <p class="game__task">${this.level.question}</p>
        <form class="game__content  game__content--triple">
         ${this.questions}
        </form>
        <div class="stats">
          <ul class="stats">
            ${this.statsBar}
          </ul>
        </div>
      </div>
  `;
  }

  get questions() {
    return this.level.answers.map((answer) => `
      <div class="game__option">
        <img src=${answer.image.url}
             alt="Option 1"
             width=${answer.image.width}
             height=${answer.image.height}>
      </div>`)
        .join(``);
  }
}
