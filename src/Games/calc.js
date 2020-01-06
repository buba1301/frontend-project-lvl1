import { maxNum, getRandomInt } from '../Help/randomNum';
import yourAnswer from '../Help/answer';
import question from '../Help/qustions';
import { answerIsNumber } from '../Help/checkAnswer';

export const game = (userName, rounds) => {
  const operetions = '+-*';
  const randomNum1 = getRandomInt(maxNum);
  const randomNum2 = getRandomInt(maxNum);
  const randomOper = operetions[getRandomInt(3)];
  const makeQustion = `${randomNum1} ${randomOper} ${randomNum2}`;
  const rightAnswer = eval(`${randomNum1} ${randomOper} ${randomNum2}`);

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
