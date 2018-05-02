import {resultsData, scoreDataConfig} from '../data/data';
import AbstractView from '../abstract-view';

const resultTemplate = (count, result) => {
  if (count) {
    return `<tr>
              <td></td>
              <td class="result__extra">${result.label}</td>
              <td class="result__extra">${count}&nbsp;
                <span class="stats__result stats__result--${result.icon}"></span>
              </td>
              <td class="result__points">×&nbsp;${result.points}</td>
              <td class="result__total">${count * result.points}</td>
            </tr>`;
  } else {
    return ``;
  }
};

const victoryTemplate = (answers, lives, statsBar, total, i) => {
  const correctAnswersCount = answers.filter((answer) => answer.answer === true).length;
  const fastAnswersCount = answers.filter((answer) => answer.time > scoreDataConfig.FAST_ANSWER_TIME).length;
  const slowAnswersCount = answers.filter((answer) => answer.time < scoreDataConfig.SLOW_ANSWER_TIME).length;

  return `
      <table class="result__table">
        <tr>
          <td class="result__number">${i}</td>
          <td colspan="2">
            ${statsBar}
          </td>
          <td class="result__points">×&nbsp;${scoreDataConfig.CORRECT_ANSWER_POINTS}</td>
          <td class="result__total">${correctAnswersCount * scoreDataConfig.CORRECT_ANSWER_POINTS}</td>
        </tr>
        
        ${resultTemplate(lives, resultsData.livesResults)}
        ${resultTemplate(fastAnswersCount, resultsData.fastResults)}
        ${resultTemplate(slowAnswersCount, resultsData.slowResults)}
        
        <tr>
          <td colspan="5" class="result__total  result__total--final">${total}</td>
        </tr>
      </table>
    `;
};

const failTemplate = (statsBar, i) => `
    <table class="result__table">
      <tr>
        <td class="result__number">${i}</td>
        <td colspan="2">
          ${statsBar}
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">${resultsData.failTitle}</td>
      </tr>
    </table>
`;

export default class StatsView extends AbstractView {
  constructor(results) {
    super();
    this.total = results.total;
    this.answers = results.answers;
    this.lives = results.lives;
    this.statsBar = results.statsBar;
  }

  get template() {
    const template = this.total > 0
      ? victoryTemplate(this.answers, this.lives, this.statsBar, this.total, 1)
      : failTemplate(this.statsBar, 1);

    return `
      <div class="result">
        ${this.total > 0 ? `<h1>${resultsData.victoryTitle}</h1>` : `<h1>${resultsData.failTitle}</h1>`}
        ${template}
      </div>
      <div class="history"/>
    `;
  }

  showScores(scores) {
    this.history.innerHTML = scores.slice(0, 1).map((score, i) =>
      score.total > 0
        ? victoryTemplate(score.answers, score.lives, score.statsBar, score.total, i + 2)
        : failTemplate(score.statsBar, i + 2)
    ).join(` `);
  }

  bind() {
    this.history = this.element.querySelector(`.history`);
  }
}
