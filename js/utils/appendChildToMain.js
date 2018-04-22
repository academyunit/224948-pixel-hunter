const mainContainer = document.querySelector(`.central`);

export const clearScreen = () => {
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
};

const getScreen = (screen) => {
  return screen.cloneNode(true);
};

export const appendChildToMain = (screen) => {
  const clonedScreen = getScreen(screen);
  mainContainer.appendChild(clonedScreen);
  return clonedScreen;
};
