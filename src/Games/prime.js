import { maxNum, getRandomInt } from '../utils';
import {
  gameStart, rounds, hello, finish,
} from '../index';

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  hello(rules);
  for (let i = 0; i < rounds; i += 1) {
    const cuurentNum = getRandomInt(maxNum);

    const isPrime = (num) => {
      if (num === 1) {
        return false;
      }
      for (let d = 2; d * d <= num; d += 1) {
        if (num % d === 0) {
          return false;
        }
      }
      return true;
    };

    const makeQustion = `${cuurentNum}`;
    const rightAnswer = isPrime(cuurentNum) ? 'yes' : 'no';

    const result = gameStart(makeQustion, rightAnswer);

    if (result === false) {
      return;
    }
  }
  finish();
};
