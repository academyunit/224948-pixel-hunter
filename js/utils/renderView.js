import FooterView from '../views/footer-view';
const mainContainer = document.querySelector(`.central`);
const footerView = new FooterView().element;

export const renderView = (element, header) => {
  mainContainer.innerHTML = ``;
  mainContainer.nextSibling.remove();
  mainContainer.appendChild(element);
  if (header) {
    mainContainer.insertAdjacentElement(`afterBegin`, header);
  }
  mainContainer.insertAdjacentElement(`afterEnd`, footerView);
};
