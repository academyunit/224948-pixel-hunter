export const initialState = {
  lives: 3,
  time: 15,
  gamesCounter: 0,
  answers: [],
  setAnswer(correct, time) {
    this.answers.push({correct, time});
  }
};

export const history = [];

export const gameTypes = {
  GAME_ONE: `game-one`,
  GAME_TWO: `game-two`,
  GAME_THREE: `game-three`
};

export const games = {
  'game-one': {
    task: `Угадай, фото или рисунок?`,
    time: initialState.time,
    questions: [
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        answers: {
          'photo': true,
          'paint': false
        }
      }
    ]
  },

  'game-two': {
    task: `Угадайте для каждого изображения фото или рисунок?`,
    time: initialState.time,
    questions: [
      {
        src: `https://k42.kn3.net/CF42609C8.jpg`,
        answers: {
          'photo': false,
          'paint': true
        }
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        answers: {
          'photo': true,
          'paint': false
        }
      }
    ]
  },

  'game-three': {
    task: `Найдите рисунок среди изображений`,
    time: initialState.time,
    questions: [
      {
        src: `http://i.imgur.com/DKR1HtB.jpg`,
        answer: true
      },
      {
        src: `https://k42.kn3.net/D2F0370D6.jpg`,
        answer: false
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        answer: false
      }
    ]
  }
};

export const scoreData = {
  ANSWERS_COUNT: 10,
  EXTRA_LIVE_POINTS: 50,
  CORRECT_ANSWER_POINTS: 100,
  TIME_POINTS: 50,
  GAME_TIME: 30,
  FAST_ANSWER_TIME: 10,
  SLOW_ANSWER_TIME: 20,
};
