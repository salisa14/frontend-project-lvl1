import letsPlay from '../index.js';
import randomNum from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const findGCD = (num1, num2) => {
  if (num2) {
    return findGCD(num2, num1 % num2);
  }
  return num1;
};
const makeExpressionAndAnswer = () => {
  const num1 = randomNum(0, 100);
  const num2 = randomNum(0, 100);
  const expression = `${num1} ${num2}`;
  const correctAnswer = findGCD(num1, num2).toString();
  return [expression, correctAnswer];
};
const gcdGame = () => {
  letsPlay(description, makeExpressionAndAnswer);
};
export default gcdGame;
