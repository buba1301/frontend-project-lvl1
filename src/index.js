import readlineSync from 'readline-sync';
import { nameList, gameStart } from './Games/gameName';

export default (gameName = 'games') => {
  console.log('Welcome to the Brain Games!');

  console.log(nameList[gameName]);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello ${userName}!`);

  if (gameName === 'games') return;
  gameStart(gameName, userName);
};
