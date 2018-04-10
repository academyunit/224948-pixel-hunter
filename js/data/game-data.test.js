import {assert} from 'chai';
import {setTimer, tick} from '../utils/timer';
import {getScore} from '../utils/score';


suite(`setTimer()`, () => {
  test(`return object`, () => {
    const newTimer = setTimer(30);
    assert.equal(`object`, typeof newTimer);
  });

  test(`tick reduces timer by 1`, () => {
    const newTimer = setTimer(10);
    tick(newTimer);
    assert.equal(9, newTimer.time);
    tick(newTimer);
    assert.equal(8, newTimer.time);
    tick(newTimer);
    assert.equal(7, newTimer.time);
  });

  test(`expired when time is 0`, () => {
    const newTimer = setTimer(1);
    tick(newTimer);
    assert.equal(true, newTimer.expired);
  });

  test(`separately created timers are independent`, () => {
    const firstTimer = setTimer(2);
    const secondTimer = setTimer(1);
    tick(firstTimer);
    tick(secondTimer);
    assert.equal(false, firstTimer.expired === secondTimer.expired);
  });

  test(`return 0 when timer expired`, () => {
    const newTimer = setTimer(0);
    tick(newTimer);
    tick(newTimer);
    assert.equal(0, newTimer.time);
  });
});

suite(`getScore()`, () => {

  test(`-1 if get null instead of answers`, () => {
    const score = getScore(null, 3);
    assert.equal(-1, score);
  });

  test(`-1 if no any answers`, () => {
    const score = getScore([{}], 3);
    assert.equal(-1, score);
  });

  test(`-1 if answered less then 10`, () => {
    const notAllAnswers = [{correct: true, time: 11}, {correct: true, time: 11}];
    const score = getScore(notAllAnswers, 0);
    assert.equal(-1, score);
  });

  test(`1150 when all-neutral-time / all-correct / full-lives`, () => {
    const neutralTimeAnswers = [{correct: true, time: 11}, {correct: true, time: 11}, {correct: true, time: 11}, {correct: true, time: 11}, {correct: true, time: 11}, {correct: true, time: 11}, {correct: true, time: 11}, {correct: true, time: 11}, {correct: true, time: 11}, {
      correct: true,
      time: 11
    }];
    const score = getScore(neutralTimeAnswers, 3);
    assert.equal(1150, score);
  });

  test(`750 when 7-correct / 3-fast / 2-neutral / 2-slow / 0-lives`, () => {
    const correct7Fast3Neutral2Slow2Answers = [{correct: true, time: 23}, {correct: false, time: 11}, {correct: false, time: 11}, {correct: true, time: 15}, {correct: true, time: 7}, {correct: true, time: 15}, {correct: true, time: 27}, {correct: false, time: 11}, {
      correct: true,
      time: 6
    }, {correct: true, time: 25}];
    const score = getScore(correct7Fast3Neutral2Slow2Answers, 0);
    assert.equal(750, score);
  });

  test(`350 when worst result: all-slow/empty-lives`, () => {
    const worstAnswers = [{correct: true, time: 8}, {correct: true, time: 8}, {correct: true, time: 3}, {correct: true, time: 2}, {correct: true, time: 4}, {correct: false, time: 5}, {correct: true, time: 6}, {correct: true, time: 7}, {correct: false, time: 23}, {correct: false, time: 24}];
    const score = getScore(worstAnswers, 0);
    assert.equal(350, score);
  });

  test(`1650 when best results: all-fast/all-correct/full-lives`, () => {
    const bestAnswers = [{correct: true, time: 23}, {correct: true, time: 25}, {correct: true, time: 28}, {correct: true, time: 21}, {correct: true, time: 26}, {correct: true, time: 27}, {correct: true, time: 26}, {correct: true, time: 23}, {correct: true, time: 24}, {correct: true, time: 21}];
    const score = getScore(bestAnswers, 3);
    assert.equal(1650, score);
  });
});
