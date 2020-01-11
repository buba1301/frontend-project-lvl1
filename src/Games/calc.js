import { maxNum, getRandomInt } from '../utils';
import {
  gameStart, rounds, hello, finish,
} from '../index';

export default () => {
  const rules = 'What is the result of the expression?';
  hello(rules);
  for (let i = 0; i < rounds; i += 1) {
    const operations = ' +-*';
    const randomNum1 = getRandomInt(maxNum);
    const randomNum2 = getRandomInt(maxNum);
    const randomOper = operations[getRandomInt(3)];
    const makeQustion = `${randomNum1} ${randomOper} ${randomNum2}`;
    const getRandomOperator = {
      '+': () => randomNum1 + randomNum2,
      '-': () => randomNum1 - randomNum2,
      '*': () => randomNum1 * randomNum2,
    };
    const rightAnswer = `${getRandomOperator[randomOper]()}`;

    const result = gameStart(makeQustion, rightAnswer);

    if (result === false) {
      return;
    }
  }
  finish();
};
