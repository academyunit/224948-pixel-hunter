const mainContainer = document.querySelector(`.central`);

export const cleanScreen = () => {
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
};

const getScreen = (screen) => {
  return screen.cloneNode(true);
};

export const render = (screen) => {
  const clonedScreen = getScreen(screen);
  mainContainer.appendChild(clonedScreen);
  return clonedScreen;
};
