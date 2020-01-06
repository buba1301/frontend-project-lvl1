import readlineSync from 'readline-sync';


let userName = '';
let rules = '';



export const hello = (str) => {
  console.log('Welcome to the Brain Games!');
  console.log(str);
  rules += str;
  userName += readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
};

export const game = (i = 3) => {

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
    if (gameName === 'Find the greatest common divisor of given numbers.') {
      return 'gcd';
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
    gcd: (num) => {
      const randomNum1 = getRandomInt(num);
      const randomNum2 = getRandomInt(num);
      console.log(`Question: ${randomNum1} ${randomNum2}`);
      const gcd = (a, b) => {
        if (b == 0) {
          return Math.abs(a);
        }
        return gcd(b, a % b);
      };
      cuurentNum += gcd(randomNum1, randomNum2);
    },
  };

  let answer = '';

  const yourAnswer = () => {
    answer += readlineSync.question('Your answer ');
  };

  const isEven = () => cuurentNum % 2 === 0;

  const correct = 'Correct!';

  const notCorrect = {
    even: () => {
      if(isEven()) {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`);
        return false;
      }
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
      return false;
    },
    calc: () => {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${cuurentNum}.`);
      return false;
    },
    gcd: () => {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${cuurentNum}.`);
      return false;
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
      return notCorrect[key]();
    },
    calc: (arg) => {
      if (cuurentNum !== +arg) {
        return notCorrect[key]();
      }
      return console.log(correct);
    },
    gcd: (arg) => {
      if (cuurentNum !== +arg) {
        return notCorrect[key]();
      }
      return console.log(correct);
    },
  };

  const runQuestion = question[key];
  const runcheckAnswer = checkAnswer[key];

  if (i === 0) {
    return console.log(`Congratulations, ${userName}!`);
  }
  runQuestion(maxNum);
  yourAnswer();
  if (runcheckAnswer(answer) === false) {
    return console.log(`Let's try again, ${userName}!`);
  }
  return game(i - 1);
};
