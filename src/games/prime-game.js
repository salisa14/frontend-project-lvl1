import letsPlay from '../index.js';
import randomNum from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  let i = 2;
  if (num < 2) {
    return false;
  }
  while (i <= (num / 2)) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};
const makeExpressionAndAnswer = () => {
  const num = randomNum(0, 100);
  const expression = String(num);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [expression, correctAnswer];
};
const primeGame = () => {
  letsPlay(description, makeExpressionAndAnswer);
};
export default primeGame;
