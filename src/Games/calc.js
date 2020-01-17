import getRandomInt from '../utils';
import gameStart from '../index';

const description = 'What is the result of the expression?';

const operators = '+-*';

const getRandomOperator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getGameData = () => {
  const num1 = getRandomInt(1, 47);
  const num2 = getRandomInt(1, 47);
  const operator = operators[getRandomInt(0, 2)];
  const question = `${num1} ${operator} ${num2}`;
  const checkAnswer = getRandomOperator[operator](num1, num2);
  return [question, checkAnswer];
};

export default () => gameStart(description, getGameData);
