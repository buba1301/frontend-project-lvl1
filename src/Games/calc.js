import { maxNum, getRandomInt } from './Help/randomNum';
import checkAnswer from './Help/checkAnswer';

export default (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const operetions = ' +-*';
    const randomNum1 = getRandomInt(maxNum);
    const randomNum2 = getRandomInt(maxNum);
    const randomOper = operetions[getRandomInt(3)];
    const makeQustion = `${randomNum1} ${randomOper} ${randomNum2}`;
    let rightAnswer;
    switch (randomOper) {
      case '+':
        rightAnswer = (randomNum1 + randomNum2).toString();
        break;
      case '-':
        rightAnswer = (randomNum1 - randomNum2).toString();
        break;
      default:
        rightAnswer = (randomNum1 * randomNum2).toString();
        break;
    }

    const check = checkAnswer(makeQustion, rightAnswer, userName);
    if (check === false) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
