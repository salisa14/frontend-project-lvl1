import {
  randomNum, welcome, win, winOrLose, question, rounds,
} from '../index.js';

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const opindex = Math.floor(Math.random() * 3);
  return operators[opindex];
};
const calcGame = () => {
  let counter = 0;
  let correctAnswer = '';
  let num1 = 0;
  let num2 = 0;
  let res = 0;
  let operator = '';
  let value = '';

  const description = 'What is the result of the expression?';
  const name = welcome(description);
  while (counter < rounds) {
    num1 = randomNum(100);
    num2 = randomNum(100);
    operator = randomOperator();
    if (operator === '+') {
      res = num1 + num2;
    } else if (operator === '-') {
      res = num1 - num2;
    } else {
      res = num1 * num2;
    }
    correctAnswer = res.toString();
    value = `${num1} ${operator} ${num2}`;
    question(value);
    counter = winOrLose(correctAnswer, name, counter);
  }
  return win(name, counter, rounds);
};
export default calcGame;
