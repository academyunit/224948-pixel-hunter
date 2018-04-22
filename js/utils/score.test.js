// import {assert} from 'chai';
import {scoreData} from '../data/data';

export const getScore = (answers, gameLivesCount) => {
  if (!answers || answers.length < scoreData.GAMES_COUNT) {
    return -1;
  }

  let score = gameLivesCount * scoreData.EXTRA_LIVE_POINTS;

  answers.filter((answer) => answer.isCorrect).map((answer) => {
    score += scoreData.CORRECT_ANSWER_POINTS;
    if (answer.time > scoreData.FAST_ANSWER_TIME) {
      score += scoreData.FAST_TIME_POINTS;
    } else if (answer.time < scoreData.SLOW_ANSWER_TIME) {
      score += scoreData.SLOW_TIME_POINTS;
    }
  });
  return score;
};

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
//       {isCorrect: true, time: 11},
//       {isCorrect: true, time: 11}
//     ];
//     const actual = getScore(answers, 0);
//     const expected = -1;
//     assert.equal(actual, expected);
//   });
//
//   test(`1150 when all-neutral-time / all-correct / full-lives`, () => {
//     const answers = [
//       {isCorrect: true, time: 11},
//       {isCorrect: true, time: 11},
//       {isCorrect: true, time: 11},
//       {isCorrect: true, time: 11},
//       {isCorrect: true, time: 11},
//       {isCorrect: true, time: 11},
//       {isCorrect: true, time: 11},
//       {isCorrect: true, time: 11},
//       {isCorrect: true, time: 11},
//       {isCorrect: true, time: 11}
//     ];
//     const actual = getScore(answers, 3);
//     const expected = 1150;
//     assert.equal(actual, expected);
//   });
//
//   test(`750 when 7-correct / 3-fast / 2-neutral / 2-slow / 0-lives`, () => {
//     const answers = [
//       {isCorrect: true, time: 23},
//       {isCorrect: false, time: 11},
//       {isCorrect: false, time: 11},
//       {isCorrect: true, time: 15},
//       {isCorrect: true, time: 7},
//       {isCorrect: true, time: 15},
//       {isCorrect: true, time: 27},
//       {isCorrect: false, time: 11},
//       {isCorrect: true, time: 6},
//       {isCorrect: true, time: 25}
//     ];
//     const actual = getScore(answers, 0);
//     const expected = 750;
//     assert.equal(actual, expected);
//   });
//
//   test(`350 when worst result: all-slow/empty-lives`, () => {
//     const answers = [
//       {isCorrect: true, time: 8},
//       {isCorrect: true, time: 8},
//       {isCorrect: true, time: 3},
//       {isCorrect: true, time: 2},
//       {isCorrect: true, time: 4},
//       {isCorrect: false, time: 5},
//       {isCorrect: true, time: 6},
//       {isCorrect: true, time: 7},
//       {isCorrect: false, time: 23},
//       {isCorrect: false, time: 24}
//     ];
//     const actual = getScore(answers, 0);
//     const expected = 350;
//     assert.equal(actual, expected);
//   });
//
//   test(`1650 when best results: all-fast/all-isCorrect/full-lives`, () => {
//     const answers = [
//       {isCorrect: true, time: 23},
//       {isCorrect: true, time: 25},
//       {isCorrect: true, time: 28},
//       {isCorrect: true, time: 21},
//       {isCorrect: true, time: 26},
//       {isCorrect: true, time: 27},
//       {isCorrect: true, time: 26},
//       {isCorrect: true, time: 23},
//       {isCorrect: true, time: 24},
//       {isCorrect: true, time: 21}
//     ];
//     const actual = getScore(answers, 3);
//     const expected = 1650;
//     assert.equal(actual, expected);
//   });
// });
