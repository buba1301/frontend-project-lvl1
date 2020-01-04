import readlineSync from 'readline-sync';

let userName;

export const hello = () => {
    console.log('Welcome to the Brain Games!');
    console.log('Answer "yes" if the number is even, otherwise answer "no"')
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello ${userName}!`);
}

const maxNum = 20;

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const cuurentNum = getRandomInt(maxNum);

export const question = () => console.log(`Question: ${cuurentNum}`);

let answer;

export const yourAnswer = () => {
  answer = readlineSync.question('Your answer ');
}

const isEven = () => cuurentNum % 2 === 0;

export const checkAnswer = () => {
  if (isEven() && answer === 'yes') {
    return console.log('Correct!') 
  }
  return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`)
};
