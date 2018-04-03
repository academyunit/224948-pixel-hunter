import {renderScreen as renderGreetingScreen} from '../screens/greeting';

export default (renderedScreen) => {
  const backButton = renderedScreen.querySelector(`.back`);
  backButton.addEventListener(`click`, () => renderGreetingScreen());
};
