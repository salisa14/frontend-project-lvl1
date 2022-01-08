import readlineSync from 'readline-sync';
import { checkTheAnswer, end, randomNum } from '../index.js';

const progression = () => {
  let counter = 0;
  let answer = '';
  let correctAnswer = '';
  let isCorrect = true;
  const chance = 3;

  let num = 1;
  let gap = 0;
  let index = 0;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  while (counter < chance) {
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
    console.log(`Question: ${numbers.join(' ')}`);
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
export default progression;
