import getRandomInt from '../utils';
import gameStart from '../index';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};

export default () => {
  const makeQuestion = () => {
    const randomNum1 = getRandomInt(1, 47);
    const randomNum2 = getRandomInt(1, 47);
    return `${randomNum1} ${randomNum2}`;
  };
  const rightAnswer = (value) => {
    const num1 = +value.split(' ')[0];
    const num2 = +value.split(' ')[1];
    return gcd(num1, num2);
  };
  gameStart(rules, makeQuestion, rightAnswer);
};
