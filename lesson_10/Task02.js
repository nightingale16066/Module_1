import { listIPv4 } from "./ipv4.js";

const uniqueIP = (arr) => {
    return (new Set(arr)).size;
}

console.log(uniqueIP(listIPv4));