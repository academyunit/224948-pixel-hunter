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
