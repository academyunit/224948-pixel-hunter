import {getScore} from '../utils/score.test';
import {statsTemplate} from '../utils/stats-template';
import {scoreDataConfig} from './data';

export default class Game {
  constructor(config) {
    const params = Object.assign({}, Game.defaultConfig, config);
    this.lives = params.lives;
    this.timer = params.timer;
    this.level = params.firstLevel;
    this.total = -1;
    this.answers = [];
    this.currentNumberGame = 0;
  }

  getLevel() {
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

  setLevel(level) {
    this.level = level;
    return this.level;
  }

  isOver() {
    return this.lives < 0;
  }

  isFinished() {
    return this.currentNumberGame === scoreDataConfig.GAMES_COUNT;
  }

  reduceLife() {
    this.lives = this.lives - 1;
    return this.lives;
  }

  incrementCurrentNumberGame() {
    this.currentNumberGame = this.currentNumberGame + 1;
    return this.currentNumberGame;
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
  firstLevel: `intro`
};
