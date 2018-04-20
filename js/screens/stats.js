import {cleanScreen, render} from '../utils/render';
import addBackButtonAction from '../utils/addBackButtonAction';
import {footerTemplate} from '../templates/footer';
import {headerTemplate} from '../templates/header';
import {getDomElementFromTemplate} from '../utils/getDomElementFromTemplate';
import {stats} from '../templates/stats';
import {getScore} from '../utils/score.test';
import {history, scoreData} from '../data/data';

const statsScreenData = {
  victoryTitle: `Победа!`,
  failTitle: `Fail`,
  pointsLabels: {
    speed: `Бонус за скорость:`,
    lives: `Бонус за жизни:`,
    tardiness: `Штраф за медлительность:`
  }
};

const totalScore = (state) => getScore(state.answers, state.lives);

const totalScoreTemplate = (score) => `
  <tr>
    <td colspan="5" class="result__total  result__total--final">${score}</td>
  </tr>
`;

const resultTemplate = (pointsType, count, points, iconTemplate, total) => `
  <tr>
    <td></td>
    <td class="result__extra">${pointsType}</td>
    <td class="result__extra">${count}&nbsp;${iconTemplate}</td>
    <td class="result__points">×&nbsp;${points}</td>
    <td class="result__total">${total}</td>
  </tr>
`;

const fastIconTemplate = `<span class="stats__result stats__result--fast"></span>`;
const aliveIconTemplate = `<span class="stats__result stats__result--alive"></span>`;
const slowIconTemplate = `<span class="stats__result stats__result--slow"></span>`;

const fastAnswersResult = (state) => {
  const fastAnswersCount = state.answers.filter((answer) => answer.correct && answer.time > 20).length;

  return resultTemplate(statsScreenData.pointsLabels.speed,
      fastAnswersCount,
      scoreData.TIME_POINTS,
      fastIconTemplate,
      fastAnswersCount * scoreData.TIME_POINTS);
};

const extraLivesResults = (state) => resultTemplate(statsScreenData.pointsLabels.lives,
    state.lives,
    scoreData.EXTRA_LIVE_POINTS,
    aliveIconTemplate,
    state.lives * scoreData.EXTRA_LIVE_POINTS);

const slowAnswersResults = (state) => {
  const slowAnswersCount = state.answers.filter((answer) => answer.correct && answer.time < 10).length;

  return resultTemplate(statsScreenData.pointsLabels.tardiness,
      slowAnswersCount,
      scoreData.TIME_POINTS,
      slowIconTemplate,
      -slowAnswersCount * scoreData.TIME_POINTS);
};

const leadBlock = (state, i, answersPoints, answersCount) => `
  <tr>
    <td class="result__number">${i}</td>
    <td colspan="2">
      ${stats(state)}
    </td>
    <td class="result__points">×&nbsp;${answersPoints}</td>
    <td class="result__total">${answersCount}</td>
  </tr>
`;

const getCorrectAnswersScore = (answers) => {
  const correctAnswersCount = answers.filter((answer) => answer.correct).length;
  return scoreData.CORRECT_ANSWER_POINTS * correctAnswersCount;
};

const victoryLead = (state, i) => leadBlock(state, i, scoreData.CORRECT_ANSWER_POINTS, getCorrectAnswersScore(state.answers));

const failLead = (state, i) => leadBlock(state, i, ``, statsScreenData.failTitle);

const victoryTemplate = (state, i) => `
  <table class="result__table">
    ${victoryLead(state, i)}
    ${fastAnswersResult(state)}
    ${extraLivesResults(state)}
    ${slowAnswersResults(state)}
    ${totalScoreTemplate(totalScore(state))}
  </table>
`;

const failTemplate = (state, i) => `
  <table class="result__table">
    ${failLead(state, i)}
  </table>
`;

const finalStatsTemplate = (state) => `<div class="result">
    ${totalScore(state) > 0
    ? `<h1>${statsScreenData.victoryTitle}</h1>${victoryTemplate(state, 1)}`
    : `<h1>${statsScreenData.failTitle}</h1>${failTemplate(state, 1)}`}
    
    ${history.length > 0
    ? history.map((savedState, i) => totalScore(savedState) > 0
      ? `<h1>${statsScreenData.victoryTitle}</h1>
         ${victoryTemplate(savedState, i + 2)}`
      : `<h1>${statsScreenData.failTitle}</h1>
           ${failTemplate(savedState, i + 2)}`
    ).join(``)
    : ``}
</div>`;

export const renderStatsScreen = (state) => {
  cleanScreen();
  const header = render(getDomElementFromTemplate(headerTemplate(state, true)));
  render(getDomElementFromTemplate(finalStatsTemplate(state)));
  render(getDomElementFromTemplate(footerTemplate));
  addBackButtonAction(header);
  const currentState = Object.assign({}, state);
  history.push(currentState);
};
