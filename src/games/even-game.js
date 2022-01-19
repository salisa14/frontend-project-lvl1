import letsPlay from '../index.js';
import randomNum from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (givenNum) => {
  if (givenNum % 2 === 0) {
    return true;
  }
  return false;
};
const makeExpressionAndAnswer = () => {
  const givenNum = randomNum(0, 100);
  const expression = `${givenNum}`;
  const correctAnswer = isEven(givenNum) ? 'yes' : 'no';
  return [expression, correctAnswer];
};
const evenGame = () => {
  letsPlay(description, makeExpressionAndAnswer);
};
export default evenGame;
