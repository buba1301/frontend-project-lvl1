import getRandomInt from '../utils';
import gameStart from '../index';

const rules = 'What is the result of the expression?';

const operations = '+-*';

const getRandomOperator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

export default () => {
  const makeQuestion = () => {
    const randomNum1 = getRandomInt(1, 47);
    const randomNum2 = getRandomInt(1, 47);
    const randomOper = operations[getRandomInt(0, 2)];
    return `${randomNum1} ${randomOper} ${randomNum2}`;
  };
  const checkAnswer = (value) => {
    const num1 = +value.split(' ')[0];
    const num2 = +value.split(' ')[2];
    const operator = value.split(' ')[1];
    return getRandomOperator[operator](num1, num2);
  };

  gameStart(rules, makeQuestion, checkAnswer);
};
