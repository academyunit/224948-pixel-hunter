import {resultsData, scoreDataConfig} from '../data/data';
import AbstractView from '../abstract-view';

const resultTemplate = (count, result) => {
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

const victoryTemplate = (i, stats, answers, lives, total) => {

  const correctAnswersCount = answers.filter((answer) => answer.answer === true).length;
  const fastAnswersCount = answers.filter((answer) => answer.time > scoreDataConfig.FAST_ANSWER_TIME).length;
  const slowAnswersCount = answers.filter((answer) => answer.time < scoreDataConfig.SLOW_ANSWER_TIME).length;

  return `<h1>${resultsData.victoryTitle}</h1>
          <table class="result__table">
            <tr>
              <td class="result__number">${i}</td>
              <td colspan="2">
                ${stats}
              </td>
              <td class="result__points">×&nbsp;${scoreDataConfig.CORRECT_ANSWER_POINTS}</td>
              <td class="result__total">${correctAnswersCount * scoreDataConfig.CORRECT_ANSWER_POINTS}</td>
            </tr>
            
            ${resultTemplate(fastAnswersCount, resultsData.fastResults)}
            ${resultTemplate(lives, resultsData.livesResults)}
            ${resultTemplate(slowAnswersCount, resultsData.slowResults)}
            
            <tr>
              <td colspan="5" class="result__total  result__total--final">${total}</td>
            </tr>
          </table>`;
};

const failTemplate = (i, stats) => `
    <h1>${resultsData.failTitle}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">${i}</td>
        <td colspan="2">
          ${stats}
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">${resultsData.failTitle}</td>
      </tr>
    </table>
`;

export default class StatsView extends AbstractView {
  constructor(total, answers, lives, stats) {
    super();
    this.total = total;
    this.answers = answers;
    this.lives = lives;
    this.stats = stats;
  }

  get template() {
    return `
      <div class="result">
          ${this.total > 0
    ? victoryTemplate(1, this.stats, this.answers, this.lives, this.total)
    : failTemplate(1, this.stats)}
      </div>`;
  }
}
