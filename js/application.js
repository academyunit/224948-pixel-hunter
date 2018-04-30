import IntroView from './views/intro-view';
import FooterView from './views/footer-view';
import GreetingView from './views/greeting-view';
import RulesView from './views/rules-view';
import HeaderView from './views/header-view';
import GameModel from './data/game-model';
import GameScreen from './game-screen';
import StatsView from './views/stats-view';

const mainContainer = document.querySelector(`.central`);
const footer = new FooterView().element;

export const changeView = (element, header) => {
  mainContainer.innerHTML = ``;
  mainContainer.nextSibling.remove();
  mainContainer.appendChild(element);
  if (header) {
    mainContainer.insertAdjacentElement(`afterBegin`, header);
  }
  mainContainer.insertAdjacentElement(`afterEnd`, footer);
};


export default class Application {

  static showIntro() {
    const introView = new IntroView();
    changeView(introView.element);
  }

  static showGreeting() {
    const greetingView = new GreetingView();
    changeView(greetingView.element);
  }

  static showRules() {
    const rulesView = new RulesView();
    const header = new HeaderView();
    changeView(rulesView.element, header.element);
  }

  static showGame(playerName) {
    const model = new GameModel(playerName);
    const gameScreen = new GameScreen(model);
    changeView(gameScreen.element);
    gameScreen.startGame();
  }

  static showResults(total, answers, lives, statsBar) {
    const statsView = new StatsView(total, answers, lives, statsBar);
    const header = new HeaderView();
    changeView(statsView.element, header.element);
  }
}
