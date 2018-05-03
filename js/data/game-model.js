import {statsTemplate} from '../utils/stats-template';
import {answers, scoreDataConfig} from './data';
import {getScore} from '../utils/score';
import {Timer} from '../utils/timer';

export default class GameModel {
  constructor(data, playerName) {
    this._playerName = playerName;
    this._state = Object.assign({}, INITIAL_STATE);
    this._answers = answers.slice(0);
    this._questions = Object.assign({}, data);
  }

  get state() {
    return this._state;
  }

  get level() {
    return this._questions[this._state.level];
  }

  get type() {
    return this.level.type;
  }

  updateLevel(level) {
    this._state.level = level;
  }

  initTimer() {
    this.timer = new Timer(INITIAL_STATE.time);
    return this.timer;
  }

  tick() {
    this._state.time = this.timer.tick();
  }

  getLives() {
    return this._state.lives;
  }

  setTotal() {
    this.total = getScore(this._answers, this._state.lives);
    return this.total;
  }

  isDead() {
    return this._state.lives <= 0;
  }

  isFinished() {
    return this._state.level === scoreDataConfig.GAMES_COUNT - 1;
  }

  reduceLives() {
    this._state.lives = this._state.lives - 1;
    return this._state.lives;
  }

  setAnswer(answer) {
    if (!answer) {
      this.reduceLives();
    }

    return this._answers.push({
      answer,
      time: this._state.time
    });
  }

  getAnswers() {
    return this._answers;
  }

  getStatsBar() {
    return statsTemplate(this.getAnswers());
  }
}

export const INITIAL_STATE = Object.freeze({
  lives: 3,
  time: 30,
  level: 0,
});
