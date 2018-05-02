export const getDomElementFromTemplate = (template) => {
  const div = document.createElement(`div`);
  div.innerHTML = template;
  return div;
};

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`can't instantiate AbstractView, only concrete one`);
    }
  }

  get template() {
    throw new Error(`Template is required`);
  }

  get element() {
    if (this.renderedElement) {
      return this.renderedElement;
    }
    this.renderedElement = this.render();
    this.bind(this.renderedElement);
    return this.renderedElement;
  }

  render() {
    return getDomElementFromTemplate(this.template);
  }

  bind() {}
}


