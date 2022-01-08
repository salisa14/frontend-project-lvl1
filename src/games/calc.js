import readlineSync from 'readline-sync';
import { checkTheAnswer, end, randomNum } from '../index.js';

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const opindex = Math.floor(Math.random() * 3);
  return operators[opindex];
};
const calcGame = () => {
  let counter = 0;
  let answer = '';
  let correctAnswer = '';
  let num1 = 0;
  let num2 = 0;
  let isCorrect = true;
  const chance = 3;
  let res = 0;
  let operator = '';

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  while (counter < chance) {
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
    console.log(`Question: ${num1} ${operator} ${num2}`);
    answer = readlineSync.question('Your answer: ');
    isCorrect = checkTheAnswer(answer, correctAnswer);
    if (isCorrect) {
      console.log('Correct!');
      counter += 1;
    } else {
      return end(answer, correctAnswer, name);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default calcGame;
