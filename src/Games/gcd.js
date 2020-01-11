import { maxNum, getRandomInt } from '../utils';
import {
  gameStart, rounds, hello, finish,
} from '../index';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  hello(rules);
  for (let i = 0; i < rounds; i += 1) {
    const gcd = (a, b) => {
      if (b === 0) {
        return Math.abs(a);
      }
      return gcd(b, a % b);
    };

    const randomNum1 = getRandomInt(maxNum);
    const randomNum2 = getRandomInt(maxNum);
    const makeQustion = `${randomNum1} ${randomNum2}`;
    const rightAnswer = gcd(randomNum1, randomNum2).toString();

    const result = gameStart(makeQustion, rightAnswer);

    if (result === false) {
      return;
    }
  }
  finish();
};
