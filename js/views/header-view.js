import AbstractView from '../abstractView';
import {greetingScreenRender} from '../screens/greeting-screen';

export default class HeaderView extends AbstractView {
  constructor(timer, lives) {
    super();
    this.timer = timer;
    this.lives = lives;
  }

  bind() {
    const backButton = this.element.querySelector(`.back`);
    backButton.addEventListener(`click`, greetingScreenRender);
  }

  get template() {
    return `
      <header class="header">
        <div class="header__back">
          <button class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.svg" width="101" height="44">
          </button>
        </div>
        ${this.timer ?
    `<h1 class="game__timer">${this.timer}</h1>
     <div class="game__lives">
    ${new Array(3 - this.lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
    ${new Array(this.lives)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
    </div>` : ``}
      </header>
    `;
  }
}
