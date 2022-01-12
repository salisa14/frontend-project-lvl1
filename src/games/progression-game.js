import {
  randomNum, welcome, win, winOrLose, question, rounds,
} from '../index.js';

const progression = () => {
  let counter = 0;
  let correctAnswer = '';
  let value = '';
  let num = 1;
  let gap = 0;
  let index = 0;

  const description = 'What number is missing in the progression?';
  const name = welcome(description);
  while (counter < rounds) {
    const numbers = [];
    num = randomNum(20);
    gap = Math.floor((Math.random() + 1) * 5);
    for (let i = 1; i < 11; i += 1) {
      numbers.push(num);
      num += gap;
    }
    index = randomNum(10);
    correctAnswer = numbers[index].toString();
    numbers[index] = '..';
    value = `${numbers.join(' ')}`;
    question(value);
    counter = winOrLose(correctAnswer, name, counter);
  }
  return win(name, counter, rounds);
};
export default progression;
