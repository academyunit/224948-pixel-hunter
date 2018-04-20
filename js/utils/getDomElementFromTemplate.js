export const getDomElementFromTemplate = (template) => {
  const div = document.createElement(`div`);
  div.innerHTML = template;
  return div;
};
