import {listIPv4} from './ipv4.js';

const uniqueIP = (arr) => (new Set(arr)).size;

console.log(uniqueIP(listIPv4));
