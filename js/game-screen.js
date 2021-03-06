import GameOneView from './views/game1-view';
import GameTwoView from './views/game2-view';
import GameThreeView from './views/game3-view';
import HeaderView from './views/header-view';
import Application from './application';

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.content = this.getGameView();
    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);
    this._interval = null;
  }

  get element() {
    return this.root;
  }

  stopGame() {
    clearInterval(this._interval);
  }

  startGame() {
    this.model.initTimer();
    this.changeLevel();
    this._interval = setInterval(() => {
      this.model.tick();
      this.updateHeader();
      this.checkIfTimerExpired();
    }, 1000);
  }

  changeLevel() {
    this.updateHeader();
    const view = this.getGameView();
    view.onAnswer = this.onUserAnswer.bind(this);
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  onUserAnswer(answer) {
    this.stopGame();
    this.model.setAnswer(answer);
    this.renderNextLevel();
  }

  checkIfTimerExpired() {
    if (this.model.state.time === 0) {
      this.stopGame();
      this.model.setAnswer(false);
      this.renderNextLevel();
    }
  }

  get results() {
    return {
      total: this.model.setTotal(),
      answers: this.model.getAnswers(),
      lives: this.model.getLives(),
      statsBar: this.model.getStatsBar()
    };
  }

  renderNextLevel() {
    if (this.model.isDead() || this.model.isFinished()) {
      Application.showResults(this.results);
    } else {
      this.model.updateLevel(this.model.state.level + 1);
      this.startGame();
    }
  }

  getGameView() {
    let gameView;
    switch (this.model.type) {
      case `tinder-like`: {
        gameView = new GameOneView(this.model.level, this.model.getStatsBar());
        break;
      }
      case `two-of-two`: {
        gameView = new GameTwoView(this.model.level, this.model.getStatsBar());
        break;
      }
      case `one-of-three`: {
        gameView = new GameThreeView(this.model.level, this.model.getStatsBar());
        break;
      }
    }

    return gameView;
  }
}
