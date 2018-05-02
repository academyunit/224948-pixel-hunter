import AbstractView from '../abstract-view';
import Application from '../application';
import {INITIAL_STATE} from '../data/game-model';

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  bind() {
    const backButton = this.element.querySelector(`.back`);
    backButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      Application.showGreeting();
    });
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
        ${this.state ?
    `<h1 class="game__timer">${this.state.time}</h1>
     <div class="game__lives">
    ${new Array(INITIAL_STATE.lives - this.state.lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
    ${new Array(this.state.lives)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
    </div>` : ``}
      </header>
    `;
  }
}
