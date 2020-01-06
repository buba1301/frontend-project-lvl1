import readlineSync from 'readline-sync';
import startEven from './even';
import startCalc from './calc';
import startGcd from './gcd';
import startProg from './progression';



export default (gameName) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameName);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  if (gameName === 'Answer "yes" if the number is even, otherwise answer "no"') {
    return startEven(userName, 3);
  }
  if (gameName === 'What is the result of the expression?') {
    return startCalc(userName, 3);
  }
  if (gameName === 'Find the greatest common divisor of given numbers.') {
    return startGcd(userName, 3);
  }
  if (gameName === 'What number is missing in the progression?') {
    return startProg(userName, 3);
  }
};