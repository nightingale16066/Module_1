'use strict';

{
    const randomizer = (amount, n, m, isEven) => {
        let result = [];

        while (result.length < amount) {
            result.push(Math.floor(Math.random() * (Math.abs(n - m) + 1) + Math.min(n, m)));
        }

        if (!isEven) {
            return result;
        }

        if (isEven === 'even') {
            return result.filter(item => !(item % 2));
        } else if (isEven === 'odd') {
            return result.filter(item => item % 2);
        }

    }

    console.log(randomizer(5, -5, -20));
    console.log(randomizer(7, 5, 8, 'odd'));
    console.log(randomizer(10, 20, 87, 'even'));
}