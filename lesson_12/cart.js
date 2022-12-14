const cart = {
  items: [],
  count: 0,
  discount: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    } else if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },

  add(name, price, amount = 1) {
    this.items.push({
      name,
      price,
      amount,
    });
    this.increaseCount(amount);
  },

  increaseCount(number) {
    this.count += number;
  },

  calculateItemPrice() {
    return (this.items.reduce(
      (sum, {price, amount}) => sum += price * amount, 0) *
      (1 - this.discount / 100));
  },

  clear() {
    this.items = [];
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
};

cart.add('Notebook', 150, 5);
cart.add('Pen', 10);
cart.add('Lolipop', 25, 10);
cart.setDiscount = 'METHED';
cart.print();


