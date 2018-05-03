import {assert} from 'chai';
import {getScore} from '../utils/score';

suite(`getScore()`, () => {

  test(`-1 if get null instead of answers`, () => {
    const actual = getScore(null, 3);
    const expected = -1;
    assert.equal(actual, expected);
  });

  test(`-1 if no any answers`, () => {
    const actual = getScore([{}], 3);
    const expected = -1;
    assert.equal(actual, expected);
  });

  test(`-1 if answered less then 10`, () => {
    const answers = [
      {answer: true, time: 11},
      {answer: true, time: 11}
    ];
    const actual = getScore(answers, 0);
    const expected = -1;
    assert.equal(actual, expected);
  });

  test(`1150 when all-neutral-time / all-correct / full-lives`, () => {
    const answers = [
      {answer: true, time: 11},
      {answer: true, time: 11},
      {answer: true, time: 11},
      {answer: true, time: 11},
      {answer: true, time: 11},
      {answer: true, time: 11},
      {answer: true, time: 11},
      {answer: true, time: 11},
      {answer: true, time: 11},
      {answer: true, time: 11}
    ];
    const actual = getScore(answers, 3);
    const expected = 1150;
    assert.equal(actual, expected);
  });

  test(`750 when 7-correct / 3-fast / 2-neutral / 2-slow / 0-lives`, () => {
    const answers = [
      {answer: true, time: 23},
      {answer: false, time: 11},
      {answer: false, time: 11},
      {answer: true, time: 15},
      {answer: true, time: 7},
      {answer: true, time: 15},
      {answer: true, time: 27},
      {answer: false, time: 11},
      {answer: true, time: 6},
      {answer: true, time: 25}
    ];
    const actual = getScore(answers, 0);
    const expected = 750;
    assert.equal(actual, expected);
  });

  test(`350 when worst result: all-slow/empty-lives`, () => {
    const answers = [
      {answer: true, time: 8},
      {answer: true, time: 8},
      {answer: true, time: 3},
      {answer: true, time: 2},
      {answer: true, time: 4},
      {answer: false, time: 5},
      {answer: true, time: 6},
      {answer: true, time: 7},
      {answer: false, time: 23},
      {answer: false, time: 24}
    ];
    const actual = getScore(answers, 0);
    const expected = 350;
    assert.equal(actual, expected);
  });

  test(`1650 when best results: all-fast/all-answer/full-lives`, () => {
    const answers = [
      {answer: true, time: 23},
      {answer: true, time: 25},
      {answer: true, time: 28},
      {answer: true, time: 21},
      {answer: true, time: 26},
      {answer: true, time: 27},
      {answer: true, time: 26},
      {answer: true, time: 23},
      {answer: true, time: 24},
      {answer: true, time: 21}
    ];
    const actual = getScore(answers, 3);
    const expected = 1650;
    assert.equal(actual, expected);
  });
});
