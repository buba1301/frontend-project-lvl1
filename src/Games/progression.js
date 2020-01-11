import { maxNum, getRandomInt } from '../utils';
import {
  gameStart, rounds, hello, finish,
} from '../index';

export default () => {
  const rules = 'What number is missing in the progression?';
  hello(rules);
  for (let i = 0; i < rounds; i += 1) {
    const cuurentNum = getRandomInt(maxNum);
    const randomNum = getRandomInt(9);
    const randomIndex = getRandomInt(9);

    const makeProgression = (num) => {
      const iter = (elem, acc) => {
        if (acc.length === 10) {
          return acc;
        }
        return iter(elem + randomNum, [...acc, elem]);
      };
      return iter(num, []);
    };
    const progression = makeProgression(cuurentNum);

    const makeQustion = progression.map((elem) => (elem === progression[randomIndex] ? '..' : elem)).join(' ');
    const rightAnswer = progression[randomIndex].toString();

    const result = gameStart(makeQustion, rightAnswer);
    if (result === false) {
      return;
    }
  }
  finish();
};
