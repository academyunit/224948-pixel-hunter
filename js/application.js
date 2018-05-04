/* eslint-disable no-alert */
import IntroView from './views/intro-view';
import FooterView from './views/footer-view';
import GreetingView from './views/greeting-view';
import RulesView from './views/rules-view';
import HeaderView from './views/header-view';
import GameModel from './data/game-model';
import GameScreen from './game-screen';
import StatsView from './views/stats-view';
import ErrorView from './views/error-view';
import Loader from './loader';

const mainContainer = document.querySelector(`.central`);
const footer = new FooterView().element;
let gameData;

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

  static start() {
    Application.showIntro();
    Loader.loadData()
        .then((data) => Application.showGreeting(data))
        .catch(Application.showError);
  }

  static showIntro() {
    const introView = new IntroView();
    changeView(introView.element);
  }

  static showGreeting(data) {
    if (!gameData) {
      gameData = JSON.parse(JSON.stringify(data));
    }
    const greetingView = new GreetingView(data);
    changeView(greetingView.element);
  }

  static showRules() {
    const rulesView = new RulesView();
    const header = new HeaderView();
    changeView(rulesView.element, header.element);
  }

  static showGame() {
    const model = new GameModel(gameData);
    const gameScreen = new GameScreen(model);
    changeView(gameScreen.element);
    gameScreen.startGame();
  }

  static showConfirm() {
    let isExit = confirm(`Вы уверены, что хотите выйти? Текущая игра будет сброшена.`);
    if (isExit) {
      Application.start();
    }
  }

  static showResults(results, playerName) {
    const statsView = new StatsView(results);
    const header = new HeaderView();
    changeView(statsView.element, header.element);
    Loader.saveResults(results, playerName)
        .then(() => Loader.loadResults(playerName))
        .then((scores) => statsView.showScores(scores))
        .catch(Application.showError);
  }

  static showError(error) {
    const errorView = new ErrorView(error);
    changeView(errorView.element);
  }
}
