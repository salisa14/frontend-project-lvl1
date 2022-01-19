import readlineSync from 'readline-sync';

const letsPlay = (description, makeExpressionAndAnswer) => {
  const rounds = 3;
  let answer = '';

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let counter = 0; counter < rounds;) {
    const [expression, correctAnswer] = makeExpressionAndAnswer();
    console.log(`Question: ${expression}`);
    answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default letsPlay;
