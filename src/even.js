
import { maxNum, getRandomInt } from './randomNum';
import yourAnswer from './answer';


export const start = (userName, rounds) => {
  const cuurentNum = getRandomInt(maxNum);

  const isEven = () => cuurentNum % 2 === 0;

  const question = () => {
    console.log(`Question: ${cuurentNum}`);
  };

  const correct = 'Correct!';

  const notCorrect = () => {
    if (isEven()) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      return false;
    }
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    return false;
  };

  const checkAnswer = (arg) => {
    if (isEven() && arg === 'yes') {
      return console.log(correct);
    }
    if (!isEven() && arg === 'no') {
      return console.log(correct);
    }
    return notCorrect();
  };

  if (rounds === 0) {
    return console.log(`Congratulations, ${userName}!`);
  };
  question();
  const answer = yourAnswer();
  if (checkAnswer(answer) === false) {
    return console.log(`Let's try again, ${userName}!`);
  }
  return start(userName, rounds - 1);
};
export default start;
