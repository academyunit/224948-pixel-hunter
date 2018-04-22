export const answerTypes = {
  SLOW: `slow`,
  FAST: `fast`,
  CORRECT: `correct`,
  WRONG: `wrong`,
  UNKNOWN: `unknow`
};

export const scoreData = {
  GAMES_COUNT: 10,
  EXTRA_LIVE_POINTS: 50,
  CORRECT_ANSWER_POINTS: 100,
  FAST_TIME_POINTS: 50,
  SLOW_TIME_POINTS: -50,
  GAME_TIME: 30,
  FAST_ANSWER_TIME: 20,
  SLOW_ANSWER_TIME: 10
};

export const resultsData = {
  victoryTitle: `Победа!`,
  failTitle: `Fail`,
  fastResults: {
    type: `fast`,
    label: `Бонус за скорость:`,
    points: scoreData.FAST_TIME_POINTS,
    icon: `fast`
  },

  livesResults: {
    type: `lives`,
    label: `Бонус за жизни:`,
    points: scoreData.EXTRA_LIVE_POINTS,
    icon: `alive`
  },

  slowResults: {
    type: `slow`,
    label: `Штраф за медлительность:`,
    points: scoreData.SLOW_TIME_POINTS,
    icon: `slow`
  }
};

export const levels = {
  intro: {
    nextScreen: `greeting`
  },

  greeting: {
    nextScreen: `rules`
  },

  rules: {
    isHeaderShowed: true,
    nextScreen: `game1`
  },

  game1: {
    gameType: `one`,
    task: `Угадай, фото или рисунок?`,
    questions: [
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        correctAnswer: `photo`
      }
    ],
    isHeaderShowed: true,
    addGameIndicators: true,
    isStatsShowed: true,
    nextScreen: `game2`
  },

  game2: {
    gameType: `two`,
    task: `Угадайте для каждого изображения фото или рисунок?`,
    questions: [
      {
        src: `https://k42.kn3.net/CF42609C8.jpg`,
        correctAnswer: `paint`
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        correctAnswer: `paint`
      }
    ],
    isHeaderShowed: true,
    addGameIndicators: true,
    isStatsShowed: true,
    nextScreen: `game3`
  },

  game3: {
    gameType: `three`,
    task: `Найдите рисунок среди изображений`,
    questions: [
      {
        src: `http://i.imgur.com/DKR1HtB.jpg`,
        correctAnswer: `paint`
      },
      {
        src: `https://k42.kn3.net/D2F0370D6.jpg`,
        correctAnswer: `photo`
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        correctAnswer: `photo`
      }
    ],
    isHeaderShowed: true,
    addGameIndicators: true,
    isStatsShowed: true,
    nextScreen: `game1`
  },
  stats: {
    isHeaderShowed: true,
    isStatsShowed: false
  }
};
