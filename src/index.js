import readlineSync from 'readline-sync';
import { nameList, gameStart } from './gameName';

export default (gameName) => {
  console.log('Welcome to the Brain Games!');

  console.log(nameList[gameName]);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello ${userName}!`);

  gameStart(gameName, userName);

};
