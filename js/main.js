const mainCentral = document.querySelector(`.central`);
const frames = document.querySelectorAll(`template`);
let frameNumber = 0;

const getFrameByNumber = (i) => {
  return frames[i].content.cloneNode(true);
};

const renderFrame = (frame) => {
  while (mainCentral.firstChild) {
    mainCentral.removeChild(mainCentral.firstChild);
  }
  mainCentral.appendChild(frame);
};

const showNextTemplate = () => {
  if (frameNumber < frames.length - 1) {
    frameNumber++;
    renderFrame(getFrameByNumber(frameNumber));
  }
};

const showPrevTemplate = () => {
  if (frameNumber > 0) {
    frameNumber--;
    renderFrame(getFrameByNumber(frameNumber));
  }
};

renderFrame(getFrameByNumber(0));

document.onkeydown = (evt) => {
  evt = evt || window.event;
  if (evt.altKey) {
    if (evt.key === `ArrowLeft`) {
      showPrevTemplate();
    } else if (evt.key === `ArrowRight`) {
      showNextTemplate();
    }
  }
};
