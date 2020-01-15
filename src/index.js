import readlineSync from 'readline-sync';

const rounds = 3;

export default (rules, makeQuestion, checkAnswer) => {
  console.log('Welcome to the Brain Games!');

  console.log(rules);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello ${userName}!`);


  for (let i = 0; i < rounds; i += 1) {
    const currentQuestion = makeQuestion();

    console.log(`Question: ${currentQuestion}`);

    const answer = readlineSync.question('Your answer ');

    const rightAnswer = `${checkAnswer(currentQuestion)}`;

    if (rightAnswer !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
