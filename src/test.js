import readlineSync from 'readline-sync';


const rounds = 3;
const startRound = 1;

export const game = (rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);

  const maxNum = 47;

  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  const operetions = '+-*';


const wichGame = (gameName) => {
  if (gameName === 'Answer "yes" if the number is even, otherwise answer "no"') {
    return 'even';
  }
  if (gameName === 'What is the result of the expression?') {
    return 'calc';
  }
};

const key = wichGame(rules);

let cuurentNum = 0;

const question = {
  even: (num) => {
    cuurentNum += getRandomInt(num);
    console.log(`Question: ${cuurentNum}`);
    },
  calc: (num) => {
    const randomNum1 = getRandomInt(num);
    const randomNum2 = getRandomInt(num);
    const randomOper = operetions[getRandomInt(3)];
    console.log(`Question: ${randomNum1} ${randomOper} ${randomNum2}`);
    cuurentNum += eval(`${randomNum1} ${randomOper} ${randomNum2}`);
  },
};

let answer = '';

const yourAnswer = () => {
  answer += readlineSync.question('Your answer ');
};

const isEven = () => cuurentNum % 2 === 0;

const correct = 'Correct!';

const notCorrectEven = {
  even: () => {
    if (isEven()) {
      return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`);
    }
    return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`);
  },
};


const checkAnswer = {
  even: (arg) => {
    if (isEven() && arg === 'yes') {
      return console.log(correct);
    }
    if (!isEven() && arg === 'no') {
      return console.log(correct);
    }
    return notCorrectEven[key]();
  },
  calc: (arg) => {
    if (cuurentNum === +arg) {
      return correct;
    }
    return console.log(`'${arg}' is wrong answer ;(. Correct answer was '${cuurentNum}'. Let's try again, ${userName}!`);
  },
};

  if (i === 3) {
    return console.log(`Congratulations, ${userName}!`);
  }
  question[key](maxNum);
  yourAnswer();
  checkAnswer[key](answer);
  return game(i - 1);
};