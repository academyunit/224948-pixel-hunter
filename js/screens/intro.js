import {getDomElementFromTemplate} from '../utils/getDomElementFromTemplate';
import {renderNextScreen} from '../data/game';
import {appendChildToMain} from '../utils/appendChildToMain';

const template = getDomElementFromTemplate(`
<div class="central__content">
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>
</div>
`);

export const renderScreen = () => {
  const renderedScreen = appendChildToMain(template);
  const nextButton = renderedScreen.querySelector(`.intro__asterisk`);
  nextButton.addEventListener(`click`, renderNextScreen);
};
