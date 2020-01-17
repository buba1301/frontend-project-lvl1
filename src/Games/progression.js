import getRandomInt from '../utils';
import gameStart from '../index';

const description = 'What number is missing in the progression?';

const makeProgression = (num) => {
  const randomNum = getRandomInt(1, 9);
  const iter = (elem, acc) => {
    if (acc.length === 10) {
      return acc;
    }
    return iter(elem + randomNum, [...acc, elem]);
  };
  return iter(num, []);
};

const getGameData = () => {
  const cuurentNum = getRandomInt(1, 47);
  const progression = makeProgression(cuurentNum);
  const index = getRandomInt(1, 8);
  const question = progression.map((elem) => (elem === progression[index] ? '..' : elem)).join(' ');
  const checkAnswer = progression[index];
  return [question, checkAnswer];
};

export default () => gameStart(description, getGameData);
