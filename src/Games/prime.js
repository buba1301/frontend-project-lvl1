import { maxNum, getRandomInt } from './Help/randomNum';
import checkAnswer from './Help/checkAnswer';

export default (userName) => {
  for (let i = 0; i < 3; i += 1) {
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

    const check = checkAnswer(makeQustion, rightAnswer, userName);
    if (check === false) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
