import getRandomInt from '../utils';
import gameStart from '../index';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const makeProgression = (num) => {
  const difference = getRandomInt(1, 9);
  const newArr = Array(progressionLength).fill(num);
  return newArr.map((elem, index) => elem + index * difference);
};

const getGameData = () => {
  const firstMember = getRandomInt(1, 47);
  const progression = makeProgression(firstMember);
  const hiddenMemberIndex = getRandomInt(1, progressionLength - 2);
  const rightAnswer = progression[hiddenMemberIndex];
  const question = progression.map((elem) => (elem === rightAnswer ? '..' : elem)).join(' ');
  return [question, rightAnswer.toString()];
};

export default () => gameStart(description, getGameData);
