export const answerTypes = {
  SLOW: `slow`,
  FAST: `fast`,
  CORRECT: `correct`,
  WRONG: `wrong`,
  UNKNOWN: `unknow`
};

export const scoreDataConfig = {
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
    points: scoreDataConfig.FAST_TIME_POINTS,
    icon: `fast`
  },

  livesResults: {
    type: `lives`,
    label: `Бонус за жизни:`,
    points: scoreDataConfig.EXTRA_LIVE_POINTS,
    icon: `alive`
  },

  slowResults: {
    type: `slow`,
    label: `Штраф за медлительность:`,
    points: scoreDataConfig.SLOW_TIME_POINTS,
    icon: `slow`
  }
};

export const levels = [
  {
    gameType: `one`,
    task: `Угадай, фото или рисунок?`,
    questions: [
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        imageWidth: 705,
        imageHeight: 455,
        correctAnswer: `photo`
      }
    ],
    nextScreen: `game2`
  },
  {
    gameType: `two`,
    task: `Угадайте для каждого изображения фото или рисунок?`,
    questions: [
      {
        src: `https://k42.kn3.net/CF42609C8.jpg`,
        imageWidth: 468,
        imageHeight: 458,
        correctAnswer: `paint`
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        imageWidth: 468,
        imageHeight: 458,
        correctAnswer: `paint`
      }
    ],
    nextScreen: `game3`
  },
  {
    gameType: `three`,
    task: `Найдите рисунок среди изображений`,
    questions: [
      {
        src: `http://i.imgur.com/DKR1HtB.jpg`,
        imageWidth: 304,
        imageHeight: 455,
        correctAnswer: `paint`
      },
      {
        src: `https://k42.kn3.net/D2F0370D6.jpg`,
        imageWidth: 304,
        imageHeight: 455,
        correctAnswer: `photo`
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        imageWidth: 304,
        imageHeight: 455,
        correctAnswer: `photo`
      }
    ],
    nextScreen: `game1`
  },
  {
    gameType: `one`,
    task: `Угадай, фото или рисунок?`,
    questions: [
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        imageWidth: 705,
        imageHeight: 455,
        correctAnswer: `photo`
      }
    ],
    nextScreen: `game2`
  },
  {
    gameType: `two`,
    task: `Угадайте для каждого изображения фото или рисунок?`,
    questions: [
      {
        src: `https://k42.kn3.net/CF42609C8.jpg`,
        imageWidth: 468,
        imageHeight: 458,
        correctAnswer: `paint`
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        imageWidth: 468,
        imageHeight: 458,
        correctAnswer: `paint`
      }
    ],
    nextScreen: `game3`
  },
  {
    gameType: `three`,
    task: `Найдите рисунок среди изображений`,
    questions: [
      {
        src: `http://i.imgur.com/DKR1HtB.jpg`,
        imageWidth: 304,
        imageHeight: 455,
        correctAnswer: `paint`
      },
      {
        src: `https://k42.kn3.net/D2F0370D6.jpg`,
        imageWidth: 304,
        imageHeight: 455,
        correctAnswer: `photo`
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        imageWidth: 304,
        imageHeight: 455,
        correctAnswer: `photo`
      }
    ],
    nextScreen: `game1`
  },
  {
    gameType: `one`,
    task: `Угадай, фото или рисунок?`,
    questions: [
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        imageWidth: 705,
        imageHeight: 455,
        correctAnswer: `photo`
      }
    ],
    nextScreen: `game2`
  },
  {
    gameType: `two`,
    task: `Угадайте для каждого изображения фото или рисунок?`,
    questions: [
      {
        src: `https://k42.kn3.net/CF42609C8.jpg`,
        imageWidth: 468,
        imageHeight: 458,
        correctAnswer: `paint`
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        imageWidth: 468,
        imageHeight: 458,
        correctAnswer: `paint`
      }
    ],
    nextScreen: `game3`
  },
  {
    gameType: `three`,
    task: `Найдите рисунок среди изображений`,
    questions: [
      {
        src: `http://i.imgur.com/DKR1HtB.jpg`,
        imageWidth: 304,
        imageHeight: 455,
        correctAnswer: `paint`
      },
      {
        src: `https://k42.kn3.net/D2F0370D6.jpg`,
        imageWidth: 304,
        imageHeight: 455,
        correctAnswer: `photo`
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        imageWidth: 304,
        imageHeight: 455,
        correctAnswer: `photo`
      }
    ],
    nextScreen: `game1`
  },
  {
    gameType: `one`,
    task: `Угадай, фото или рисунок?`,
    questions: [
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        imageWidth: 705,
        imageHeight: 455,
        correctAnswer: `photo`
      }
    ],
    nextScreen: `game2`
  }
];

