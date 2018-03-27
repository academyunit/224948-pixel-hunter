const ALT = 18;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;

const leftKeysCombo = [ALT, LEFT_ARROW];
const rightKeysCombo = [ALT, RIGHT_ARROW];

const mainCentral = document.querySelector(`.central`);
const frames = document.querySelectorAll(`template`);

let frameNumber = 0;

let showFrameByNumber = (i) => {
  mainCentral.innerHTML = ``;
  mainCentral.appendChild(frames[i].content.cloneNode(true));
};

showFrameByNumber(0);

let arrayContainsArray = ((superset, subset) => {
  for (let value of subset) {
    if (!superset.includes(value)) {
      return false;
    }
  }
  return true;
});

function showFramesOnKeysCombo() {
  let pressedKeys = [];

  document.onkeydown = (evt) => {
    evt = evt || window.event;
    pressedKeys.push(evt.keyCode);
    if (arrayContainsArray(pressedKeys, leftKeysCombo)) {
      showPrevTemplate();
    } else if (arrayContainsArray(pressedKeys, rightKeysCombo)) {
      showNextTemplate();
    }
  };

  document.onkeyup = () => {
    pressedKeys = [];
  };
}

let showNextTemplate = () => {
  if (frameNumber < frames.length - 1) {
    frameNumber++;
    showFrameByNumber(frameNumber);
  }
};

let showPrevTemplate = () => {
  if (frameNumber > 0) {
    frameNumber--;
    showFrameByNumber(frameNumber);
  }
};

showFramesOnKeysCombo();


