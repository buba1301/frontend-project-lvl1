import { maxNum, getRandomInt } from '../Help/randomNum';
import yourAnswer from '../Help/answer';
import question from '../Help/qustions';
import { answerIsNumber } from '../Help/checkAnswer';

export const game = (userName, rounds = 3) => {
  const gcd = (a, b) => {
    if (b === 0) {
      return Math.abs(a);
    }
    return gcd(b, a % b);
  };

  const randomNum1 = getRandomInt(maxNum);
  const randomNum2 = getRandomInt(maxNum);
  const makeQustion = `${randomNum1} ${randomNum2}`;
  const rightAnswer = gcd(randomNum1, randomNum2);

  if (rounds === 0) {
    return console.log(`Congratulations, ${userName}!`);
  }
  question(makeQustion);

  const answer = yourAnswer();

  if (answerIsNumber(answer, rightAnswer) === false) {
    return console.log(`Let's try again, ${userName}!`);
  }
  return game(userName, rounds - 1);
};
export default game;
