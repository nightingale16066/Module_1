'use strict';

{
    const randomizer = (amount) => {
        let result = [];

        while (result.length < amount) {
            result.push(Math.floor(Math.random() * (100 + 1)));
        }

        return result;
    }

    console.log(randomizer(4));
}