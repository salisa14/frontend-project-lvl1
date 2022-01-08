import readlineSync from 'readline-sync';
import { checkTheAnswer, end, randomNum } from '../index.js';

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
  let answer = '';
  let correctAnswer = '';
  let isCorrect = true;
  const chance = 3;
  let num1 = 0;
  let num2 = 0;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  while (counter < chance) {
    num1 = randomNum(100);
    num2 = randomNum(100);
    correctAnswer = findGCD(num1, num2).toString();
    console.log(`Question: ${num1} ${num2}`);
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
export default gcdGame;
