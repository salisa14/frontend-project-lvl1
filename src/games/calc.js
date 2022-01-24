import letsPlay from '../index.js';
import randomNum from '../utils.js';

const description = 'What is the result of the expression?';
const makeRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const opindex = randomNum(0, operators.length);
  return operators[opindex];
};
const getResultOfCase = (num1, num2, operator) => {
  let res = '';
  switch (operator) {
    case '+':
      res = num1 + num2;
      break;
    case '-':
      res = num1 - num2;
      break;
    case '*':
      res = num1 * num2;
      break;
    default:
      res = null;
  }
  if (operator === '+') {
    res = num1 + num2;
  } else if (operator === '-') {
    res = num1 - num2;
  } else {
    res = num1 * num2;
  }
  return res;
};
const makeExpressionAndAnswer = () => {
  const num1 = randomNum(0, 100);
  const num2 = randomNum(1, 100);
  const operator = makeRandomOperator();
  const expression = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(getResultOfCase(num1, num2, operator));
  return [expression, correctAnswer];
};
const calcGame = () => {
  letsPlay(description, makeExpressionAndAnswer);
};
export default calcGame;
