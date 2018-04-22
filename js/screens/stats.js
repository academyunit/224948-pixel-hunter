import {getDomElementFromTemplate} from '../utils/getDomElementFromTemplate';
import {statsTemplate} from '../domElement/stats';
import {resultsData, scoreData, answerTypes} from '../data/data';
import {appendChildToMain} from '../utils/appendChildToMain';

const resultTemplate = (answersTypes, count, result) => {
  if (count) {
    return `<tr>
              <td></td>
              <td class="result__extra">${result.label}</td>
              <td class="result__extra">${count}&nbsp;<span class="stats__result stats__result--${result.icon}"></span></td>
              <td class="result__points">×&nbsp;${result.points}</td>
              <td class="result__total">${count * result.points}</td>
            </tr>`;
  } else {
    return ``;
  }
};

const victoryTemplate = (i, answersTypes, livesCount, total) => {
  const correctAnswersCount = answersTypes.filter((type) => type !== answerTypes.WRONG).length;
  const fastAnswersCount = answersTypes.filter((answersType) => answersType === answerTypes.FAST).length;
  const slowAnswersCount = answersTypes.filter((answersType) => answersType === answerTypes.SLOW).length;

  return `<h1>${resultsData.victoryTitle}</h1>
          <table class="result__table">
            <tr>
              <td class="result__number">${i}</td>
              <td colspan="2">
                ${statsTemplate(answersTypes)}
              </td>
              <td class="result__points">×&nbsp;${scoreData.CORRECT_ANSWER_POINTS}</td>
              <td class="result__total">${correctAnswersCount * scoreData.CORRECT_ANSWER_POINTS}</td>
            </tr>
            
            ${resultTemplate(answersTypes, fastAnswersCount, resultsData.fastResults)}
            ${resultTemplate(answersTypes, livesCount, resultsData.livesResults)}
            ${resultTemplate(answersTypes, slowAnswersCount, resultsData.slowResults)}
            
            <tr>
              <td colspan="5" class="result__total  result__total--final">${total}</td>
            </tr>
          </table>`;
};

const failTemplate = (i, answersTypes) => `
    <h1>${resultsData.failTitle}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">${i}</td>
        <td colspan="2">
          ${statsTemplate(answersTypes)}
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">${resultsData.failTitle}</td>
      </tr>
    </table>
`;

export const renderScreen = (game) => appendChildToMain(
    getDomElementFromTemplate(`
      <div class="result">
          ${game.getTotal() > 0
    ? victoryTemplate(1, game.getAnswersTypes(), game.getLives(), game.getTotal())
    : failTemplate(1, game.getAnswersTypes())}
      </div>`
    )
);
