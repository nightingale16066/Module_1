'use strict';

{
    const randomizer = (amount, n, m) => {
        let result = [];

        while (result.length < amount) {
            result.push(Math.floor(Math.random() * Math.abs(n - m + 1) + Math.min(n, m)));
        }

        return result;
    }

    console.log(randomizer(5, -5, -20));
}