const calculate = (totalSum, goodsAmount, promocode) => {
    if (goodsAmount > 10) {
        totalSum *= 0.97;
    }

    if (totalSum > 30000) {
        totalSum = (totalSum - 30000) * 0.85 + 30000;
    }
    if (promocode === "METHED") {
        totalSum *= 0.9;
    }
    if (promocode === "G3H2Z1" && totalSum > 2000) {
        totalSum -= 500;
    }
    return totalSum;
}

console.log(calculate(2001, 5, "G3H2Z1"));
console.log(calculate(35000, 15, "G3H2Z1"));
console.log(calculate(60000, 15, "METHED"));
console.log(calculate(60000, 15, "G3H2Z1"));