import { maxNum, getRandomInt } from './Help/randomNum';
import checkAnswer from './Help/checkAnswer';

export default (userName) => {
  for (let i = 0; i < 3; i += 1) {
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

    const check = checkAnswer(makeQustion, rightAnswer, userName);
    if (check === false) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
