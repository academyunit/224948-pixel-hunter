import {getScore} from '../utils/score.test';
import {statsTemplate} from '../utils/stats-template';
import {answers, levels, scoreDataConfig} from './data';
import {Timer} from '../utils/timer.test';

const getLevel = (state) => levels[state.level];
const getType = (state) => levels[state.level].gameType;

export default class GameModel {
  constructor(playerName) {
    this.playerName = playerName;
    this.restart();
    this._state = Object.assign({}, INITIAL_STATE);
    this._answers = answers.slice(0);
  }

  get state() {
    return this._state;
  }

  getCurrentLevel() {
    return getLevel(this._state);
  }

  getCurrentType() {
    return getType(this._state);
  }

  updateLevel(level) {
    this._state.level = level;
  }

  restart() {
    this._state = INITIAL_STATE;
  }

  initTimer() {
    this.timer = new Timer(30);
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

  getTotal() {
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

const INITIAL_STATE = Object.freeze({
  lives: 3,
  time: 30,
  level: 0,
  gameType: `one`
});
