import readlineSync from 'readline-sync';

export const yourAnswer = () => {
  return readlineSync.question('Your answer ');
};
export default yourAnswer;