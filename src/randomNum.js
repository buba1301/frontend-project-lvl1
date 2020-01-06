
export const maxNum = 47;

export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const cuurentNum = getRandomInt(maxNum)
const prog = getRandomInt(5);

const makeProgression = (num) => {
  const iter = (elem, acc) => {
   if (acc.length === 10) {
    return acc;
   }
    return iter(elem + prog, [...acc, elem])
  }
  return iter(num, [])
}

