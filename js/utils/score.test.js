// import {assert} from 'chai';
import {scoreData} from '../data/data';

export const getScore = (answers, gameLivesCount) => {
  if (!answers || answers.length < scoreData.ANSWERS_COUNT) {
    return -1;
  }

  let score = gameLivesCount * scoreData.EXTRA_LIVE_POINTS;

  answers.filter((answer) => answer.correct).map((answer) => {
    const usedTime = scoreData.GAME_TIME - answer.time;
    score += scoreData.CORRECT_ANSWER_POINTS;
    if (usedTime < scoreData.FAST_ANSWER_TIME) {
      score += scoreData.TIME_POINTS;
    } else if (usedTime > scoreData.SLOW_ANSWER_TIME) {
      score -= scoreData.TIME_POINTS;
    }
  });
  return score;
};
//
// suite(`getScore()`, () => {
//
//   test(`-1 if get null instead of answers`, () => {
//     const actual = getScore(null, 3);
//     const expected = -1;
//     assert.equal(actual, expected);
//   });
//
//   test(`-1 if no any answers`, () => {
//     const actual = getScore([{}], 3);
//     const expected = -1;
//     assert.equal(actual, expected);
//   });
//
//   test(`-1 if answered less then 10`, () => {
//     const answers = [
//       {correct: true, time: 11},
//       {correct: true, time: 11}
//     ];
//     const actual = getScore(answers, 0);
//     const expected = -1;
//     assert.equal(actual, expected);
//   });
//
//   test(`1150 when all-neutral-time / all-correct / full-lives`, () => {
//     const answers = [
//       {correct: true, time: 11},
//       {correct: true, time: 11},
//       {correct: true, time: 11},
//       {correct: true, time: 11},
//       {correct: true, time: 11},
//       {correct: true, time: 11},
//       {correct: true, time: 11},
//       {correct: true, time: 11},
//       {correct: true, time: 11},
//       {correct: true, time: 11}
//     ];
//     const actual = getScore(answers, 3);
//     const expected = 1150;
//     assert.equal(actual, expected);
//   });
//
//   test(`750 when 7-correct / 3-fast / 2-neutral / 2-slow / 0-lives`, () => {
//     const answers = [
//       {correct: true, time: 23},
//       {correct: false, time: 11},
//       {correct: false, time: 11},
//       {correct: true, time: 15},
//       {correct: true, time: 7},
//       {correct: true, time: 15},
//       {correct: true, time: 27},
//       {correct: false, time: 11},
//       {correct: true, time: 6},
//       {correct: true, time: 25}
//     ];
//     const actual = getScore(answers, 0);
//     const expected = 750;
//     assert.equal(actual, expected);
//   });
//
//   test(`350 when worst result: all-slow/empty-lives`, () => {
//     const answers = [
//       {correct: true, time: 8},
//       {correct: true, time: 8},
//       {correct: true, time: 3},
//       {correct: true, time: 2},
//       {correct: true, time: 4},
//       {correct: false, time: 5},
//       {correct: true, time: 6},
//       {correct: true, time: 7},
//       {correct: false, time: 23},
//       {correct: false, time: 24}
//     ];
//     const actual = getScore(answers, 0);
//     const expected = 350;
//     assert.equal(actual, expected);
//   });
//
//   test(`1650 when best results: all-fast/all-correct/full-lives`, () => {
//     const answers = [
//       {correct: true, time: 23},
//       {correct: true, time: 25},
//       {correct: true, time: 28},
//       {correct: true, time: 21},
//       {correct: true, time: 26},
//       {correct: true, time: 27},
//       {correct: true, time: 26},
//       {correct: true, time: 23},
//       {correct: true, time: 24},
//       {correct: true, time: 21}
//     ];
//     const actual = getScore(answers, 3);
//     const expected = 1650;
//     assert.equal(actual, expected);
//   });
// });
