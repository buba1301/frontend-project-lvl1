import getRandomInt from '../utils';
import gameStart from '../index';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let divisor = 2; divisor ** 2 <= num; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = getRandomInt(1, 47);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question.toString(), rightAnswer];
};

export default () => gameStart(description, getGameData);
