import readlineSync from 'readline-sync';
import { checkTheAnswer, end, randomNum } from '../index.js';

const isprime = (num) => {
  let i = 2;
  while (i <= (num / 2)) {
    if (num % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};
const primeGame = () => {
  let counter = 0;
  let answer = '';
  let correctAnswer = 'yes';
  let isCorrect = true;
  const chance = 3;
  let num = 1;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (counter < chance) {
    num = randomNum(100);
    if (num === 0 || num === 1) {
      correctAnswer = 'no';
    }
    correctAnswer = isprime(num);
    console.log(`Question: ${num}`);
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
export default primeGame;
