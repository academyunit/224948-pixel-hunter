import {dataConfig} from '../data/data';

export const getScore = (answers, gameLivesCount) => {
  if (!answers || answers.length < dataConfig.GAMES_COUNT) {
    return -1;
  }

  let score = gameLivesCount * dataConfig.EXTRA_LIVE_POINTS;

  answers.filter((answer) => answer.answer).map((answer) => {
    score += dataConfig.CORRECT_ANSWER_POINTS;
    if (answer.time > dataConfig.FAST_ANSWER_TIME) {
      score += dataConfig.FAST_TIME_POINTS;
    } else if (answer.time < dataConfig.SLOW_ANSWER_TIME) {
      score += dataConfig.SLOW_TIME_POINTS;
    }
  });
  return score;
};
