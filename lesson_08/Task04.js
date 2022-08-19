'use strict';

const leapYears = (from, to) => {
    let result = [];
    const min = Math.min(from, to);
    const max = Math.max(from, to);

    for (let i = min; i <= max; i++) {
        if (!(i % 4) && (i % 100) || !(i % 400)) {
            result.push(i);
        }
    }

    return result;
}

console.log(leapYears(2000, 1900));