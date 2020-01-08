import { maxNum, getRandomInt } from './Help/randomNum';
import checkAnswer from './Help/checkAnswer';

export default (userName) => {
  const gcd = (a, b) => {
    if (b === 0) {
      return Math.abs(a);
    }
    return gcd(b, a % b);
  };
  for (let i = 0; i < 3; i += 1) {
    const randomNum1 = getRandomInt(maxNum);
    const randomNum2 = getRandomInt(maxNum);
    const makeQustion = `${randomNum1} ${randomNum2}`;
    const rightAnswer = gcd(randomNum1, randomNum2).toString();

    const check = checkAnswer(makeQustion, rightAnswer, userName);
    if (check === false) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
