
import { maxNum, getRandomInt } from '../utils';
import {
  gameStart, rounds, hello, finish,
} from '../index';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  hello(rules);
  for (let i = 0; i < rounds; i += 1) {
    const cuurentNum = getRandomInt(maxNum);

    const isEven = (num) => num % 2 === 0;

    const makeQustion = `${cuurentNum}`;
    const rightAnswer = (isEven(cuurentNum) ? 'yes' : 'no');

    const result = gameStart(makeQustion, rightAnswer);

    if (result === false) {
      return;
    }
  }
  finish();
};
