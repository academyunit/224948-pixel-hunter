import {getDomElementFromTemplate} from '../utils/getDomElementFromTemplate';

export const getResultTemplate = (type) => `<li class="stats__result stats__result--${type}"></li>`;

export const statsTemplate = (answersTypes) => `
    <div class="stats">
      <ul class="stats">
         ${answersTypes.map((answerType) => getResultTemplate(answerType)).join(``)}
         ${new Array(10 - answersTypes.length).fill(getResultTemplate(`unknown`)).join(``)}
      </ul>
    </div>
`;

export const statsElement = (answersTypes) => getDomElementFromTemplate(statsTemplate(answersTypes));
