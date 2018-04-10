const Timer = function (time) {
  this.time = time;
  this.expired = false;
  this.end = () => {
    if (this.time === 0) {
      this.expired = true;
    }
  };
};

export const setTimer = (time) => {
  return new Timer(time);
};

export const tick = (timer) => {
  if (timer.time > 0) {
    --timer.time;
    timer.end();
  }
};
