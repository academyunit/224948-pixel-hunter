const removeChildren = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};

const getElement = (element) => {
  return element.cloneNode(true);
};

export default (element) => {
  const mainCentral = document.querySelector(`.central`);
  removeChildren(mainCentral);
  mainCentral.appendChild(getElement(element));
  return mainCentral;
};
