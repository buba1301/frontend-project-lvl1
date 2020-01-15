
import getRandomInt from '../utils';
import gameStart from '../index';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

export default () => {
  const makeQuestion = () => {
    const randomNum = getRandomInt(1, 47);
    return randomNum;
  };
  const checkAnswer = (number) => (isEven(number) ? 'yes' : 'no');

  gameStart(rules, makeQuestion, checkAnswer);
};
