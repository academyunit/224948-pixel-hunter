const slowTemplate = `<li class="stats__result stats__result--slow"></li>`;
const fastTemplate = `<li class="stats__result stats__result--fast"></li>`;
const correctTemplate = `<li class="stats__result stats__result--correct"></li>`;
const wrongTemplate = `<li class="stats__result stats__result--wrong"></li>`;
const unknownTemplate = `<li class="stats__result stats__result--unknown"></li>`;

const getFilledAnswers = (state) => {
  const filledAnswers = [];
  state.answers.map((answer) => {
    if (answer.correct) {
      if (answer.time < 10) {
        filledAnswers.push(fastTemplate);
      } else if (answer.time > 20) {
        filledAnswers.push(slowTemplate);
      } else {
        filledAnswers.push(correctTemplate);
      }
    } else {
      filledAnswers.push(wrongTemplate);
    }
  });
  return filledAnswers;
};

export const stats = (state) => `
  <ul class="stats">
  ${getFilledAnswers(state)}
   ${new Array(10 - state.answers.length)
      .fill(unknownTemplate)
      .join(``)}
  </ul>
`;

export const statsTemplate = (state) => `
  <div class="stats">
    ${stats(state)}
  </div>
`;
