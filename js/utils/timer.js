import {dataConfig as scoreDataConfig} from '../data/data';
export class Timer {
  constructor(time) {
    this.time = time;
  }

  tick() {
    if (this.time > 0) {
      this.time--;
    } else {
      throw new Error(`Time is over`);
    }
    return this.time;
  }
}

export const blinkTimer = (timerElement) => {
  const timer = timerElement.querySelector(`.game__timer`);
  const value = parseInt(timer.textContent, 10);
  if (value <= scoreDataConfig.ALARM_TIME) {
    timer.classList.add(`alarm-timer`);
  }
};
