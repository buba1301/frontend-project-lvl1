import readlineSync from 'readline-sync';

const rounds = 3;

export default (description, getGameData) => {
  console.log('Welcome to the Brain Games!');

  console.log(description);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello ${userName}!`);


  for (let i = 0; i < rounds; i += 1) {
    const [question, rightAnswer] = getGameData();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer ');

    if (rightAnswer !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
