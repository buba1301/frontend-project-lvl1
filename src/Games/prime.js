import { maxNum, getRandomInt } from '../Help/randomNum';
import yourAnswer from '../Help/answer';
import question from '../Help/qustions';
import { answerIsString } from '../Help/checkAnswer';

export const start = (userName, rounds) => {
  const cuurentNum = getRandomInt(maxNum);

  const isPrime = (num) => {
    if (num === 1) {
      return false;
    }
    for (let d = 2; d * d <= num; d += 1) {
      if (num % d === 0) {
        return false;
      }
      return true;
    }
  };

  const makeQustion = `${cuurentNum}`;
  const rightAnswer = isPrime(cuurentNum) ? 'yes' : 'no';

  if (rounds === 0) {
    return console.log(`Congratulations, ${userName}!`);
  }

  question(makeQustion);

  const answer = yourAnswer();

  if (answerIsString(answer, rightAnswer) === false) {
    return console.log(`Let's try again, ${userName}!`);
  }
  return start(userName, rounds - 1);
};
export default start;
