const INITIAL_FRAME_NUMBER = 0;
const keyCodes = {
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
};

let currentFrameNumber = INITIAL_FRAME_NUMBER;
const body = document.querySelector(`body`);
const frames = document.querySelectorAll(`template`);

const removeChildren = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};

const getFrameByNumber = (i) => {
  return frames[i].content.cloneNode(true);
};

const renderFrame = (frame) => {
  const mainCentral = document.querySelector(`.central`);
  removeChildren(mainCentral);
  mainCentral.appendChild(frame);
};

const showNextTemplate = () => {
  if (currentFrameNumber < frames.length - 1) {
    currentFrameNumber++;
    renderFrame(getFrameByNumber(currentFrameNumber));
  }
};

const showPrevTemplate = () => {
  if (currentFrameNumber > 0) {
    currentFrameNumber--;
    renderFrame(getFrameByNumber(currentFrameNumber));
  }
};

body.addEventListener(`keydown`, (event) => {
  if (!event.altKey) {
    return;
  } else if (event.keyCode === keyCodes.LEFT_ARROW) {
    showPrevTemplate();
  } else if (event.keyCode === keyCodes.RIGHT_ARROW) {
    showNextTemplate();
  }
});


renderFrame(getFrameByNumber(currentFrameNumber));
