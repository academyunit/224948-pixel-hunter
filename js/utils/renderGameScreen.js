import {gameTypes} from '../data/data';
import {renderGameOne} from '../screens/gameOne';
import {renderGameTwo} from '../screens/gameTwo';
import {renderGameThree} from '../screens/gameThree';
import {renderStatsScreen} from '../screens/stats';

const getRandom = () => {
  return Math.floor(Math.random() * Object.keys(gameTypes).length);
};

const checkoutGame = (state) => {
  state.gamesCounter++;
};

export const renderRandomGame = (state) => {
  return [
    () => renderGameOne(state),
    () => renderGameTwo(state),
    () => renderGameThree(state)
  ][getRandom()];
};

export const renderNextGame = (state) => {
  checkoutGame(state);
  if (state.gamesCounter < 10 && state.lives >= 0) {
    renderRandomGame(state)();
  } else {
    renderStatsScreen(state);
  }
};
