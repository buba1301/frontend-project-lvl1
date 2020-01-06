import { maxNum, getRandomInt } from './randomNum';
import yourAnswer from './answer';


export const game = (userName, rounds) => {
  const operetions = '+-*';

  const question = () => {
    const randomNum1 = getRandomInt(maxNum);
    const randomNum2 = getRandomInt(maxNum);
    const randomOper = operetions[getRandomInt(3)];
    console.log(`Question: ${randomNum1} ${randomOper} ${randomNum2}`);
    return eval(`${randomNum1} ${randomOper} ${randomNum2}`);
  };

  const correct = 'Correct!';

  const notCorrect = () => {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${check}.`);
    return false;
  };

  const checkAnswer = (arg) => {
    if (check !== +arg) {
      return notCorrect();
    }
    return console.log(correct);
  };

  if (rounds === 0) {
    return console.log(`Congratulations, ${userName}!`);
  }
  const check = question();
  const answer = yourAnswer();
  if (checkAnswer(answer) === false) {
    return console.log(`Let's try again, ${userName}!`);
  }
  return game(userName, rounds - 1);
};
export default game;