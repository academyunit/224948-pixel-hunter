import {scoreDataConfig} from '../data/data';

export const getScore = (answers, gameLivesCount) => {
  if (!answers || answers.length < scoreDataConfig.GAMES_COUNT) {
    return -1;
  }

  let score = gameLivesCount * scoreDataConfig.EXTRA_LIVE_POINTS;

  answers.filter((answer) => answer.answer).map((answer) => {
    score += scoreDataConfig.CORRECT_ANSWER_POINTS;
    if (answer.time > scoreDataConfig.FAST_ANSWER_TIME) {
      score += scoreDataConfig.FAST_TIME_POINTS;
    } else if (answer.time < scoreDataConfig.SLOW_ANSWER_TIME) {
      score += scoreDataConfig.SLOW_TIME_POINTS;
    }
  });
  return score;
};
