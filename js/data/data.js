export const dataConfig = {
  GAMES_COUNT: 10,
  EXTRA_LIVE_POINTS: 50,
  CORRECT_ANSWER_POINTS: 100,
  FAST_TIME_POINTS: 50,
  SLOW_TIME_POINTS: -50,
  GAME_TIME: 30,
  FAST_ANSWER_TIME: 20,
  SLOW_ANSWER_TIME: 10,
  ALARM_TIME: 5,
};

export const resultsData = {
  victoryTitle: `Победа!`,
  failTitle: `Fail`,
  fastResults: {
    type: `fast`,
    label: `Бонус за скорость:`,
    points: dataConfig.FAST_TIME_POINTS,
    icon: `fast`
  },

  livesResults: {
    type: `lives`,
    label: `Бонус за жизни:`,
    points: dataConfig.EXTRA_LIVE_POINTS,
    icon: `alive`
  },

  slowResults: {
    type: `slow`,
    label: `Штраф за медлительность:`,
    points: dataConfig.SLOW_TIME_POINTS,
    icon: `slow`
  }
};

export const answers = [];
