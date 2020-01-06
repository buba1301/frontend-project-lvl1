import { maxNum, getRandomInt } from '../Help/randomNum';
import yourAnswer from '../Help/answer';
import question from '../Help/qustions';
import { answerIsNumber } from '../Help/checkAnswer';

export const game = (userName, rounds = 3) => {
  const cuurentNum = getRandomInt(maxNum);
  const prog = getRandomInt(5);
  const randomIndex = getRandomInt(9);

  const makeProgression = (num) => {
    const iter = (elem, acc) => {
      if (acc.length === 10) {
        return acc;
      }
      return iter(elem + prog, [...acc, elem]);
    };
    return iter(num, []);
  };
  const progression = makeProgression(cuurentNum);
  const makeQustion = progression.map((elem) => (elem === progression[randomIndex] ? '..' : elem)).join(' ');
  const rightAnswer = progression[randomIndex];


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
