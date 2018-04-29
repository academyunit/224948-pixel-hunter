import GameOneView from '../views/game1-view';
import GameTwoView from '../views/game2-view';
import GameThreeView from '../views/game3-view';
import {renderView} from '../utils/renderView';
import {levels} from '../data/data';
import HeaderView from '../views/header-view';

export const gameScreenRender = (game, onUserAnswer) => {
  const level = game.getLevel();
  const timer = game.getTimer();
  const lives = game.getLives();
  const statsBar = game.getStatsBar();
  const gameType = levels[level].gameType;
  const header = new HeaderView(timer, lives);
  let gameView;

  switch (gameType) {
    case `one`: {
      gameView = new GameOneView(level, statsBar);
      renderView(gameView.element, header.element);
      gameView.onAnswer = onUserAnswer;
      break;
    }
    case `two`: {
      gameView = new GameTwoView(level, statsBar);
      renderView(gameView.element, header.element);
      gameView.onAnswer = onUserAnswer;
      break;
    }
    case `three`: {
      gameView = new GameThreeView(level, statsBar);
      renderView(gameView.element, header.element);
      gameView.onAnswer = onUserAnswer;
      break;
    }
  }
};
