import {
  randomNum, welcome, win, winOrLose, question, rounds,
} from '../index.js';

const findGCD = (num1, num2) => {
  const a = num1;
  const b = num2;
  if (b) {
    return findGCD(b, a % b);
  }
  return a;
};
const gcdGame = () => {
  let counter = 0;
  let correctAnswer = '';
  let num1 = 0;
  let num2 = 0;
  let value = '';

  const description = 'Find the greatest common divisor of given numbers.';
  const name = welcome(description);
  while (counter < rounds) {
    num1 = randomNum(100);
    num2 = randomNum(100);
    correctAnswer = findGCD(num1, num2).toString();
    value = `${num1} ${num2}`;
    question(value);
    counter = winOrLose(correctAnswer, name, counter);
  }
  return win(name, counter, rounds);
};
export default gcdGame;
