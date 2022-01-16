import { randomNum, letsPlay } from '../index.js';

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const opindex = Math.floor(Math.random() * 3);
  return operators[opindex];
};
const expressionAndAnswer = () => {
  let num1 = 0;
  let num2 = 0;
  let res = 0;
  let operator = '';
  const value = [];
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
  value.push(`${num1} ${operator} ${num2}`);
  value.push(res.toString());
  return value;
};
const calcGame = () => {
  const description = 'What is the result of the expression?';
  letsPlay(description, expressionAndAnswer);
};
export default calcGame;
