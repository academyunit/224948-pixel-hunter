import AbstractView from '../abstractView';
import {levels} from '../data/data';

export default class GameOneView extends AbstractView {
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
      if (evt.target.tagName !== `INPUT`) {
        return;
      }
      const answer = levels[this.level].questions[0].correctAnswer === evt.target.value;
      this.onAnswer(answer);
    });
  }

  get template() {
    return `
    <div class="game">
        <p class="game__task">${levels[this.level].task}</p>
        <form class="game__content game__content--wide">
          <div class="game__option">
            <img src=${levels[this.level].questions[0].src} alt="Option 1"
                 width=${levels[this.level].questions[0].imageWidth}
                 height=${levels[this.level].questions[0].imageHeight}>
            <label class="game__answer game__answer--photo game__answer--wide">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--paint game__answer--wide">
              <input name="question2" type="radio" value="paint">
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
