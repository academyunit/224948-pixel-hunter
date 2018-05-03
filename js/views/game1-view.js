import AbstractView from '../abstract-view';

export default class GameOneView extends AbstractView {
  constructor(level, statsBar) {
    super();
    this.level = level;
    this.statsBar = statsBar;
  }

  onAnswer() {}

  bind() {
    const form = this.element.querySelector(`.game__content`);
    form.addEventListener(`change`, (evt) => {
      if (evt.target.tagName !== `INPUT`) {
        return;
      }
      const answer = this.level.answers[0].type === evt.target.value;

      this.onAnswer(answer);
    });
  }

  get template() {
    return `
    <div class="game">
        <p class="game__task">${this.level.question}</p>
        <form class="game__content game__content--wide">
          <div class="game__option">
            <img src=${this.level.answers[0].image.url} 
                 alt="Option 1"
                 width=${this.level.answers[0].image.width}
                 height=${this.level.answers[0].image.height}>
            <label class="game__answer game__answer--photo game__answer--wide">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--paint game__answer--wide">
              <input name="question2" type="radio" value="painting">
              <span>Рисунок</span>
            </label>
          </div>
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
