import readlineSync from 'readline-sync';
import { checkTheAnswer, end, randomNum } from '../index.js';

const checkTheNum = (givenNum) => {
  if (givenNum % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenGame = () => {
  let counter = 0;
  let answer = '';
  let correctAnswer = '';
  let givenNum = 0;
  let isCorrect = true;
  const chance = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (counter < chance) {
    givenNum = randomNum();
    console.log(`Question: ${givenNum}`);
    answer = readlineSync.question('Your answer: ');
    correctAnswer = checkTheNum(givenNum);
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
export default evenGame;
