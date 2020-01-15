import getRandomInt from '../utils';
import gameStart from '../index';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

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

export default () => {
  const makeQuestion = () => {
    const randomNum = getRandomInt(1, 47);
    return `${randomNum}`;
  };
  const checkAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

  gameStart(rules, makeQuestion, checkAnswer);
};
