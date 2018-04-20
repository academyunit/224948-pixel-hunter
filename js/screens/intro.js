import {render} from '../utils/render';
import {renderScreen as renderGreetingScreen} from './greeting';
import {footerTemplate} from '../templates/footer';
import {getDomElementFromTemplate} from '../utils/getDomElementFromTemplate';

const introTemplate = `
<div class="central__content">
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>
</div>
`;

export const renderScreen = () => {
  const renderedScreen = render(getDomElementFromTemplate(introTemplate));
  render(getDomElementFromTemplate(footerTemplate));
  const nextButton = renderedScreen.querySelector(`.intro__asterisk`);
  nextButton.addEventListener(`click`, renderGreetingScreen);
};
