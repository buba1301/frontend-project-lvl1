import readlineSync from 'readline-sync';

const rounds = 3;

export default (description, getGameData) => {
  console.log('Welcome to the Brain Games!');

  console.log(description);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello ${userName}!`);


  for (let i = 0; i < rounds; i += 1) {
    const gameData = getGameData();

    console.log(`Question: ${gameData[0]}`);

    const answer = readlineSync.question('Your answer ');

    const rightAnswer = `${gameData[1]}`;

    if (rightAnswer !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
