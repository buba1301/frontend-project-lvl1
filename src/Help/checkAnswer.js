
export const answerIsNumber = (arg, rightAnswer) => {
  if (rightAnswer !== +arg) {
    console.log(`${arg} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    return false;
  }
  return console.log('Correct!');
};

export const answerIsString = (arg, rightAnswer) => {
  if (rightAnswer !== arg) {
    console.log(`${arg} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    return false;
  }
  return console.log('Correct!');
};
