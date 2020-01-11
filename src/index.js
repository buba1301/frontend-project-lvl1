import readlineSync from 'readline-sync';

const rounds = 3;

let userName;

const hello = (rules) => {
  console.log('Welcome to the Brain Games!');

  console.log(rules);

  userName = readlineSync.question('May I have your name? ');

  console.log(`Hello ${userName}!`);
};

const gameStart = (makeQustion, rightAnswer) => {
  console.log(`Question: ${makeQustion}`);

  const answer = readlineSync.question('Your answer ');

  if (rightAnswer !== answer) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  return console.log('Correct!');
};

const finish = () => console.log(`Congratulations, ${userName}!`);

export {
  rounds, gameStart, hello, finish,
};
