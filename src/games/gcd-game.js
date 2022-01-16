import { randomNum, letsPlay } from '../index.js';

const findGCD = (num1, num2) => {
  const a = num1;
  const b = num2;
  if (b) {
    return findGCD(b, a % b);
  }
  return a;
};
const expressionAndAnswer = () => {
  const num1 = randomNum(100);
  const num2 = randomNum(100);
  const value = [];
  value.push(`${num1} ${num2}`);
  value.push(findGCD(num1, num2).toString());
  return value;
};
const gcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  letsPlay(description, expressionAndAnswer);
};
export default gcdGame;
