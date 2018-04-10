export const getScore = (answers, gameLivesCount) => {
  let score = 0;
  if (answers && answers.length === 10) {
    score += gameLivesCount * 50;
    answers.filter((answer) => answer.correct).map((answer) => {
      const usedTime = 30 - answer.time;
      score += 100;
      if (usedTime < 10) {
        score += 50;
      } else if (usedTime > 20) {
        score -= 50;
      }
    });
  } else {
    score = -1;
  }
  return score;
};
