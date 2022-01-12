import {
  randomNum, welcome, win, winOrLose, question, rounds,
} from '../index.js';

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
  let correctAnswer = 'yes';
  let num = 1;
  let value = '';

  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const name = welcome(description);
  while (counter < rounds) {
    num = randomNum(100);
    if (num === 0 || num === 1) {
      correctAnswer = 'no';
    } else {
      correctAnswer = isprime(num);
    }
    value = `${num}`;
    question(value);
    counter = winOrLose(correctAnswer, name, counter);
  }
  return win(name, counter, rounds);
};
export default primeGame;
