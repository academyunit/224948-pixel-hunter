import Game from './data/game';
import {gameScreenRender} from './screens/game-screen';
import {statsScreenRender} from './screens/stats-screen';

let game;

export const initGame = () => {
  game = new Game();
  renderGame();
};

const onUserAnswer = (answer) => {
  game.setAnswer(answer);
  game.incrementLevel();
  renderGame();
};

export const renderGame = () => {
  if (game.isOver()) {
    statsScreenRender(game);
  } else if (game.isFinished()) {
    game.setTotal();
    statsScreenRender(game);
  } else {
    gameScreenRender(game, onUserAnswer);
  }
};
