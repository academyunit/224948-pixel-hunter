import {renderView} from '../utils/renderView';
import RulesView from '../views/rules-view';
import HeaderView from '../views/header-view';

export const rulesScreenRender = () => {
  const rulesView = new RulesView();
  const header = new HeaderView();
  renderView(rulesView.element, header.element);
};
