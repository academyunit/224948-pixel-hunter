import {renderView} from '../utils/renderView';
import IntroView from '../views/intro-view';

export const introScreenRender = () => {
  const introView = new IntroView();
  renderView(introView.element);
};
