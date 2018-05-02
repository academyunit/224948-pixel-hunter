import AbstractView from '../abstract-view';

export default class GameTwoView extends AbstractView {
  constructor(level, statsBar) {
    super();
    this.level = level;
    this.statsBar = statsBar;
  }

  onAnswer() {
  }

  bind() {
    const form = this.element.querySelector(`.game__content`);
    form.addEventListener(`change`, (evt) => {
      let checkedInputs;
      if (evt.target.tagName === `INPUT`) {
        checkedInputs = Array.from(evt.currentTarget).filter((element) => element.checked);
      }
      if (checkedInputs.length < 2) {
        return;
      }
      const answer = (checkedInputs[0].value === this.level.answers[0].type) &&
        (checkedInputs[1].value === this.level.answers[1].type);
      this.onAnswer(answer);
    });
  }

  get template() {
    return `
      <div class="game">
        <p class="game__task">${this.level.question}</p>
        <form class="game__content">
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
    return this.level.answers.map((answer, i) => `
        <div class="game__option">
          <img src=${answer.image.url} 
               alt="Option ${i + 1}"
               width=${answer.image.width}
               height=${answer.image.height}>
          <label class="game__answer game__answer--photo">
            <input name="question${i + 1}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input name="question${i + 1}" type="radio" value="painting">
            <span>Рисунок</span>
          </label>
        </div>
      `)
        .join(``);
  }
}
