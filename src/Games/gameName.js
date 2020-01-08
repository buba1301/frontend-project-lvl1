import startEven from './even';
import startCalc from './calc';
import startGcd from './gcd';
import startProg from './progression';
import startPrime from './prime';


export const nameList = {
  games: '',
  even: 'Answer "yes" if the number is even, otherwise answer "no"',
  calc: 'What is the result of the expression?',
  gcd: 'Find the greatest common divisor of given numbers.',
  progression: 'What number is missing in the progression?',
  prime: 'Answer "yes" if given number is prime. Otherwise answer "no"',
};


const gameList = {
  even: (userName) => startEven(userName),
  calc: (userName) => startCalc(userName),
  gcd: (userName) => startGcd(userName),
  progression: (userName) => startProg(userName),
  prime: (userName) => startPrime(userName),
};

export const gameStart = (gameName, userName) => gameList[gameName](userName);