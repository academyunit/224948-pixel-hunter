import IntroView from './screens/intro-view';
import GreetingView from './screens/greeting-view';
import GameOneView from './screens/game1-view';
import GameTwoView from './screens/game2-view';
import GameThreeView from './screens/game3-view';
import RulesView from './screens/rules-view';
import HeaderView from './screens/header-view';
import FooterView from './screens/footer-view';
import StatsView from './screens/stats-view';
import Game from './data/game';
import {levels} from './data/data';

const mainContainer = document.querySelector(`.central`);
let game;
const footerView = new FooterView().element;

export const initGame = () => {
  game = new Game();
  render();
};

export const renderView = (element, header) => {
  mainContainer.innerHTML = ``;
  mainContainer.nextSibling.remove();
  mainContainer.appendChild(element);
  if (header) {
    mainContainer.insertAdjacentElement(`afterBegin`, header);
  }
  mainContainer.insertAdjacentElement(`afterEnd`, footerView);
};

const onUserAnswer = (answer) => {
  game.setAnswer(answer);
  game.incrementCurrentNumberGame();
  renderNextScreen();
};

export const render = () => {
  const level = game.getLevel();

  switch (level) {
    case `intro`: {
      const introView = new IntroView();
      renderView(introView.element);
      break;
    }
    case `greeting`: {
      const greetingView = new GreetingView();
      renderView(greetingView.element);
      break;
    }
    case `rules`: {
      const rulesView = new RulesView();
      const header = new HeaderView().element;
      renderView(rulesView.element, header);
      break;
    }
    case `game1`: {
      const game1View = new GameOneView(levels.game1, game.getStatsBar());
      const header = new HeaderView(game).element;
      renderView(game1View.element, header);
      game1View.onAnswer = onUserAnswer;
      break;
    }
    case `game2`: {
      const game2View = new GameTwoView(levels.game2, game.getStatsBar());
      const header = new HeaderView(game).element;
      renderView(game2View.element, header);
      game2View.onAnswer = onUserAnswer;
      break;
    }
    case `game3`: {
      const game3View = new GameThreeView(levels.game3, game.getStatsBar());
      const header = new HeaderView(game).element;
      renderView(game3View.element, header);
      game3View.onAnswer = onUserAnswer;
      break;
    }
    case `stats`: {
      const statsView = new StatsView(game.getTotal(), game.getAnswers(), game.getLives(), game.getStatsBar());
      const header = new HeaderView().element;
      renderView(statsView.element, header);
      break;
    }
  }
};

export const renderNextScreen = () => {
  const level = game.getLevel();
  if (game.isOver()) {
    game.setLevel(`stats`);
  } else if (game.isFinished()) {
    game.setTotal();
    game.setLevel(`stats`);
  } else {
    game.setLevel(levels[level].nextScreen);
  }

  render();
};
