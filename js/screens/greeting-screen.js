import {renderView} from '../utils/renderView';
import GreetingView from '../views/greeting-view';

export const greetingScreenRender = () => {
  const greetingView = new GreetingView();
  renderView(greetingView.element);
};
