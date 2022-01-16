import { randomNum, letsPlay } from '../index.js';

const expressionAndAnswer = () => {
  const value = [];
  const numbers = [];
  let index = 0;
  let num = randomNum(20);
  let hiddenNum = 1;
  const gap = Math.floor((Math.random() + 1) * 5);
  for (let i = 1; i < 11; i += 1) {
    numbers.push(num);
    num += gap;
  }
  index = randomNum(10);
  hiddenNum = numbers[index].toString();
  numbers[index] = '..';
  value.push(`${numbers.join(' ')}`);
  value.push(hiddenNum);
  return value;
};

const progression = () => {
  const description = 'What number is missing in the progression?';
  letsPlay(description, expressionAndAnswer);
};
export default progression;
