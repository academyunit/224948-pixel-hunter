import {assert} from 'chai';
import {Timer} from '../utils/timer';

suite(`setTimer()`, () => {
  test(`tick reduces timer by 1`, () => {
    const newTimer = new Timer(10);
    const actual = newTimer.tick();
    const expected = 9;
    assert.equal(actual, expected);
  });

  test(`return 0 when timer finished`, () => {
    const newTimer = new Timer(1);
    const actual = newTimer.tick();
    const expected = 0;
    assert.equal(actual, expected);
  });
});

