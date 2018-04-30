// import {assert} from 'chai';

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

// suite(`setTimer()`, () => {
//   test(`tick reduces timer by 1`, () => {
//     const newTimer = new Timer(10);
//     const actual = newTimer.tick();
//     const expected = 9;
//     assert.equal(actual, expected);
//   });
//
//   test(`return 0 when timer finished`, () => {
//     const newTimer = new Timer(1);
//     const actual = newTimer.tick();
//     const expected = 0;
//     assert.equal(actual, expected);
//   });
//
//   test(`return 0 while using already finished timer`, () => {
//     const newTimer = new Timer(0);
//     const actual = newTimer.tick();
//     const expected = 0;
//     assert.equal(actual, expected);
//   });
// });

