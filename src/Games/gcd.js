import getRandomInt from '../utils';
import gameStart from '../index';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};

const getGameData = () => {
  const num1 = getRandomInt(1, 47);
  const num2 = getRandomInt(1, 47);
  const question = `${num1} ${num2}`;
  const rightAnswer = gcd(num1, num2);
  return [question, rightAnswer];
};

export default () => gameStart(description, getGameData);
