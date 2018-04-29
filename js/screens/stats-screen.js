import {renderView} from '../utils/renderView';
import StatsView from '../views/stats-view';
import HeaderView from '../views/header-view';

export const statsScreenRender = (game) => {
  const statsView = new StatsView(game.getTotal(), game.getAnswers(), game.getLives(), game.getStatsBar());
  const header = new HeaderView();
  renderView(statsView.element, header.element);
};
