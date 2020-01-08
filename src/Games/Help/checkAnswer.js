import yourAnswer from './answer';
import question from './qustions';


export default (makeQustion, rightAnswer, userName) => {
  question(makeQustion);

  const answer = yourAnswer();

  switch (rightAnswer) {
    case answer:
      return console.log('Correct!');
    default:
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
  }
};
