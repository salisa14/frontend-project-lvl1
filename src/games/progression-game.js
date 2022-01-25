import letsPlay from '../index.js';
import randomNum from '../utils.js';

const description = 'What number is missing in the progression?';
const makeAProgression = (firstNum, gap, progLength) => {
  const numbers = [];
  numbers.push(firstNum);
  let num = firstNum;
  for (let i = 2; i <= progLength; i += 1) {
    num += gap;
    numbers.push(num);
  }
  return numbers;
};
const makeExpressionAndAnswer = () => {
  const numbers = makeAProgression(randomNum(0, 20), randomNum(1, 6), randomNum(5, 11));
  const index = randomNum(0, numbers.length);
  const correctAnswer = numbers[index].toString();
  numbers[index] = '..';
  const expression = numbers.join(' ');
  return [expression, correctAnswer];
};
const progressionGame = () => {
  letsPlay(description, makeExpressionAndAnswer);
};
export default progressionGame;
