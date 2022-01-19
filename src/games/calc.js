import letsPlay from '../index.js';
import randomNum from '../utils.js';

const description = 'What is the result of the expression?';
const makeRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const opindex = randomNum(0, 3);
  return operators[opindex];
};
const getResultOfCase = (num1, num2, operator) => {
  let res = '';
  if (operator === '+') {
    res = num1 + num2;
  } else if (operator === '-') {
    res = num1 - num2;
  } else {
    res = num1 * num2;
  }
  return res.toString();
};
const makeExpressionAndAnswer = () => {
  const num1 = randomNum(0, 100);
  const num2 = randomNum(1, 100);
  const operator = makeRandomOperator();
  const expression = `${num1} ${operator} ${num2}`;
  const correctAnswer = getResultOfCase(num1, num2, operator);
  return [expression, correctAnswer];
};
const calcGame = () => {
  letsPlay(description, makeExpressionAndAnswer);
};
export default calcGame;
