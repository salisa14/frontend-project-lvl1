import readlineSync from 'readline-sync';

const roundCount = 3;
const letsPlay = (description, makeExpressionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let counter = 0; counter < roundCount; counter += 1) {
    const [expression, correctAnswer] = makeExpressionAndAnswer();
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default letsPlay;
