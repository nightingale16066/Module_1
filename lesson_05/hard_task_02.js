const firstNumber = +prompt('Enter first number: ');
const secondNumber = +prompt('Enter second number: ');

const minNumber = (a, b) => {
    return (a + b - Math.abs(a - b)) / 2;
}

console.log(minNumber(firstNumber, secondNumber));