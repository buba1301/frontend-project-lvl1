import readlineSync from 'readline-sync';

let userName;

export const hello = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
};

const maxNum = 100;

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

let cuurentNum;

const question = (num) => {
  cuurentNum = getRandomInt(num);
  console.log(`Question: ${cuurentNum}`);
};

let answer;

const yourAnswer = () => {
  answer = readlineSync.question('Your answer ');
};

const isEven = () => cuurentNum % 2 === 0;

const correct = 'Correct!';

const notCorrect = () => {
  if (isEven()) {
    return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`);
  }
  return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`);
};

const checkAnswer = () => {
  if (isEven() && answer === 'yes') {
    return console.log(correct);
  }
  if (!isEven() && answer === 'no') {
    return console.log(correct);
  }
  return notCorrect();
};

export const game = (i = 3) => {
  if (i === 0) {
    return console.log(`Congratulations, ${userName}!`);
  }
  question(maxNum);
  yourAnswer();
  checkAnswer();
  return game(i - 1);
};
