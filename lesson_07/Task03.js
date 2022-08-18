'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];


const addPrefix = (names, prefix) => {
    return names.map(item => `${prefix} ${item}`);
}

console.log(addPrefix(names, 'Mr'));