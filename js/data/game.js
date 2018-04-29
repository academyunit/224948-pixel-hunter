import {getScore} from '../utils/score.test';
import {statsTemplate} from '../utils/stats-template';
import {scoreDataConfig} from './data';

export default class Game {
  constructor(config) {
    const params = Object.assign({}, Game.defaultConfig, config);
    this.lives = params.lives;
    this.timer = params.timer;
    this.gameType = params.firstGameType;
    this.total = -1;
    this.answers = [];
    this.level = 0;
  }

  getLevel() {
    return this.level;
  }

  incrementLevel() {
    this.level = this.level + 1;
    return this.level;
  }

  getTimer() {
    return this.timer;
  }

  getLives() {
    return this.lives;
  }

  setTotal() {
    this.total = getScore(this.answers, this.lives);
    return this.total;
  }

  getTotal() {
    return this.total;
  }

  isOver() {
    return this.lives < 0;
  }

  isFinished() {
    return this.level === scoreDataConfig.GAMES_COUNT;
  }

  reduceLife() {
    this.lives = this.lives - 1;
    return this.lives;
  }

  setAnswer(answer) {
    if (!answer) {
      this.reduceLife();
    }

    return this.answers.push({
      answer,
      time: this.timer
    });
  }

  getAnswers() {
    return this.answers;
  }

  getStatsBar() {
    return statsTemplate(this.getAnswers());
  }
}

Game.defaultConfig = {
  lives: 3,
  timer: 15,
  firstGameType: `one`,
};
