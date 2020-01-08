
import { maxNum, getRandomInt } from './Help/randomNum';
import checkAnswer from './Help/checkAnswer';

export default (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const cuurentNum = getRandomInt(maxNum);

    const isEven = (num) => num % 2 === 0;

    const makeQustion = `${cuurentNum}`;
    const rightAnswer = isEven(cuurentNum) ? 'yes' : 'no';

    const check = checkAnswer(makeQustion, rightAnswer, userName);
    if (check === false) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
