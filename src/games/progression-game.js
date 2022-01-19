import letsPlay from '../index.js';
import randomNum from '../utils.js';

const description = 'What number is missing in the progression?';
const makeAProgression = () => {
  const numbers = [];
  let num = randomNum(0, 20);
  const gap = randomNum(1, 6);
  for (let i = 1; i < 11; i += 1) {
    numbers.push(num);
    num += gap;
  }
  return numbers;
};
const makeExpressionAndAnswer = () => {
  const index = randomNum(0, 10);
  const numbers = makeAProgression();
  const correctAnswer = numbers[index].toString();
  numbers[index] = '..';
  const expression = `${numbers.join(' ')}`;
  return [expression, correctAnswer];
};
const progressionGame = () => {
  letsPlay(description, makeExpressionAndAnswer);
};
export default progressionGame;
