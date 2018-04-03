const removeChildren = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};

const getScreen = (screen) => {
  return screen.cloneNode(true);
};

const mainContainer = document.querySelector(`.central`);

export default (screen) => {
  const clonedScreen = getScreen(screen);
  removeChildren(mainContainer);
  mainContainer.appendChild(clonedScreen);
  return clonedScreen;
};
