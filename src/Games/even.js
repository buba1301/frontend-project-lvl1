
import getRandomInt from '../utils';
import gameStart from '../index';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = getRandomInt(1, 47).toString();
  const checkAnswer = (isEven(+question) ? 'yes' : 'no');
  return [question, checkAnswer];
};

export default () => gameStart(description, getGameData);
