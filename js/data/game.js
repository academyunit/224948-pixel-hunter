import {levels, scoreData} from './data';
import {renderScreen as renderIntro} from '../screens/intro';
import {renderScreen as renderGreeting} from '../screens/greeting';
import {renderScreen as renderRules} from '../screens/rules';
import {renderScreen as renderGame1} from '../screens/gameOne';
import {renderScreen as renderGame2} from '../screens/gameTwo';
import {renderScreen as renderGame3} from '../screens/gameThree';
import {renderScreen as renderStats} from '../screens/stats';
import {footerElement} from '../domElement/footer';
import {headerElement} from '../domElement/header';
import {statsElement} from '../domElement/stats';
import addBackButtonAction from '../utils/addBackButtonAction';
import {getScore} from '../utils/score.test';
import {appendChildToMain, clearScreen} from '../utils/appendChildToMain';

let game;

class Game {
  constructor(config) {
    const params = Object.assign({}, Game.defaultConfig, config);
    this.lives = params.lives;
    this.timer = params.timer;
    this.type = params.firstScreen;
    this.total = -1;
    this.answers = [];
    this.currentNumberGame = 0;
    this.answersTypes = [];
  }

  getType() {
    return this.type;
  }

  getTimer() {
    return this.timer;
  }

  getLives() {
    return this.lives;
  }

  setTotal() {
    this.total = getScore(this.answers, this.lives);
    return this.total;
  }

  getTotal() {
    return this.total;
  }

  setType(type) {
    this.type = type;
    return this.type;
  }

  isOver() {
    return this.lives < 0;
  }

  isFinished() {
    return this.currentNumberGame === scoreData.GAMES_COUNT;
  }

  reduceLife() {
    this.lives = this.lives - 1;
    return this.lives;
  }

  incrementCurrentNumberGame() {
    this.currentNumberGame = this.currentNumberGame + 1;
    return this.currentNumberGame;
  }

  isCorrect(answer) {
    const {type} = this;
    switch (type) {
      case `game1`: {
        return levels[`game1`].questions.every((question) => question.correctAnswer === answer);
      }
      case `game2`: {
        return levels[`game2`].questions.every((question, i) => question.correctAnswer === answer[i]);
      }
      case `game3`: {
        return levels[`game3`].questions.every((question, i) => question.correctAnswer === answer[i]);
      }
    }
    return false;
  }

  setAnswersTypes(type) {
    this.answersTypes.push(type);
  }

  getAnswersTypes() {
    return this.answersTypes;
  }

  isFast() {
    const {timer} = this;
    return timer >= scoreData.FAST_ANSWER_TIME;
  }

  isSlow() {
    const {timer} = this;
    return timer <= scoreData.SLOW_ANSWER_TIME;
  }

  getAnswerType(answer) {
    if (!this.isCorrect(answer)) {
      return `wrong`;
    } else if (this.isFast()) {
      return `fast`;
    } else if (this.isSlow()) {
      return `slow`;
    } else {
      return `correct`;
    }
  }

  setAnswer(answer) {
    const isCorrect = this.isCorrect(answer);
    const answerType = this.getAnswerType(answer);

    if (!isCorrect) {
      this.reduceLife();
    }

    this.setAnswersTypes(answerType);

    return this.answers.push({
      isCorrect,
      time: this.timer,
    });
  }
}

Game.defaultConfig = {
  lives: 3,
  timer: 15,
  firstScreen: `intro`
};

export const initGame = (config) => {
  game = new Game(config);
  render();
};

export const renderNextScreen = () => {
  const type = game.getType();
  if (game.isOver()) {
    game.setType(`stats`);
  } else if (game.isFinished()) {
    game.setTotal();
    game.setType(`stats`);
  } else {
    game.setType(levels[type].nextScreen);
  }

  render();
};

export const render = () => {
  const type = game.getType();
  const answersTypes = game.getAnswersTypes();

  clearScreen();

  if (levels[type].isHeaderShowed) {
    const header = appendChildToMain(headerElement(game));
    addBackButtonAction(header, game);
  }

  switch (type) {
    case `intro`: {
      renderIntro();
      break;
    }
    case `greeting`: {
      renderGreeting();
      break;
    }
    case `rules`: {
      renderRules();
      break;
    }
    case `game1`: {
      renderGame1(game);
      game.incrementCurrentNumberGame();
      break;
    }
    case `game2`: {
      renderGame2(game);
      game.incrementCurrentNumberGame();
      break;
    }
    case `game3`: {
      renderGame3(game);
      game.incrementCurrentNumberGame();
      break;
    }
    case `stats`: {
      renderStats(game);
      break;
    }
  }

  if (levels[type].isStatsShowed) {
    appendChildToMain(statsElement(answersTypes));
  }
  appendChildToMain(footerElement);
};
