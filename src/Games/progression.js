import getRandomInt from '../utils';
import gameStart from '../index';

const rules = 'What number is missing in the progression?';

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

export default () => {
  const makeQuestion = () => {
    const cuurentNum = getRandomInt(1, 47);
    const progression = makeProgression(cuurentNum);
    const index = getRandomInt(1, 8);
    return progression.map((elem) => (elem === progression[index] ? '..' : elem)).join(' ');
  };
  const checkAnswer = (value) => {
    const arr = value.split(' ');
    const missingElementIndex = arr.indexOf('..');
    const interval = (+arr[missingElementIndex + 1] - +arr[missingElementIndex - 1]) / 2;
    return +arr[missingElementIndex - 1] + interval;
  };

  gameStart(rules, makeQuestion, checkAnswer);
};
