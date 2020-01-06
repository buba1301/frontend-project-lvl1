import { maxNum, getRandomInt } from './randomNum';
import yourAnswer from './answer';

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
  const question = () => {
    console.log(`Question: ${makeQustion}`);
    return progression[randomIndex];
  };

  const correct = 'Correct!';

  const notCorrect = () => {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${check}.`);
    return false;
  };

  const checkAnswer = (arg) => {
    if (check !== +arg) {
      return notCorrect();
    }
    return console.log(correct);
  };


  if (rounds === 0) {
    return console.log(`Congratulations, ${userName}!`);
  }
  const check = question();
  const answer = yourAnswer();
  if (checkAnswer(answer) === false) {
    return console.log(`Let's try again, ${userName}!`);
  }
  return game(userName, rounds - 1);
};
export default game;
