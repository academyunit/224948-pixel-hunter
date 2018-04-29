import {answerTypes, scoreDataConfig} from '../data/data';


export const statsTemplate = (answers) => {
  let resultsArray = [];

  answers.forEach(({answer, time}) => {
    if (!answer) {
      resultsArray.push(`<li class="stats__result stats__result--wrong"></li>`);
    } else if (time > answerTypes.FAST) {
      resultsArray.push(`<li class="stats__result stats__result--fast"></li>`);
    } else if (time < answerTypes.SLOW) {
      resultsArray.push(`<li class="stats__result stats__result--slow"></li>`);
    } else {
      resultsArray.push(`<li class="stats__result stats__result--correct"></li>`);
    }
  });

  while (resultsArray.length < scoreDataConfig.GAMES_COUNT) {
    resultsArray.push(`<li class="stats__result stats__result--unknown"></li>`);
  }

  return resultsArray.join(` `);
};

