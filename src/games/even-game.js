import { randomNum, letsPlay } from '../index.js';

const checkTheNum = (givenNum) => {
  if (givenNum % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const expressionAndAnswer = () => {
  let givenNum = 0;
  const value = [];
  givenNum = randomNum(100);

  value.push(`${givenNum}`);
  value.push(checkTheNum(givenNum));
  return value;
};
const evenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  letsPlay(description, expressionAndAnswer);
};
export default evenGame;
