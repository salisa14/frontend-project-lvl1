import letsPlay from '../index.js';
import randomNum from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const findGCD = (num1, num2) => {
  const a = num1;
  const b = num2;
  if (b) {
    return findGCD(b, a % b);
  }
  return a;
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
