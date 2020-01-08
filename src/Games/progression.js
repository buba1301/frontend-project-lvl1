import { maxNum, getRandomInt } from './Help/randomNum';
import checkAnswer from './Help/checkAnswer';

export default (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const cuurentNum = getRandomInt(maxNum);
    const randomNum = getRandomInt(9);
    const randomIndex = getRandomInt(9);

    const makeProgression = (num) => {
      const iter = (elem, acc) => {
        if (acc.length === 10) {
          return acc;
        }
        return iter(elem + randomNum, [...acc, elem]);
      };
      return iter(num, []);
    };
    const progression = makeProgression(cuurentNum);

    const makeQustion = progression.map((elem) => (elem === progression[randomIndex] ? '..' : elem)).join(' ');
    const rightAnswer = progression[randomIndex].toString();


    const check = checkAnswer(makeQustion, rightAnswer, userName);
    if (check === false) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
