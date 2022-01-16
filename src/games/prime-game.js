import { randomNum, letsPlay } from '../index.js';

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
const expressionAndAnswer = () => {
  const num = randomNum(100);
  const value = [];
  value.push(`${num}`);
  if (num === 0 || num === 1) {
    value.push('no');
  } else {
    value.push(isprime(num));
  }
  return value;
};

const primeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  letsPlay(description, expressionAndAnswer);
};
export default primeGame;
