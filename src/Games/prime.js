import getRandomInt from '../utils';
import gameStart from '../index';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

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

const getGameData = () => {
  const question = getRandomInt(1, 47).toString();
  const checkAnswer = isPrime(+question) ? 'yes' : 'no';
  return [question, checkAnswer];
};

export default () => gameStart(description, getGameData);
