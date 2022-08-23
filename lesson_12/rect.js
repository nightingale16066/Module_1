const rectangle = {
  _width: 5,
  _height: 5,

  set width(width) {
    this._width = width;
  },

  set height(height) {
    this._height = height;
  },
  get perimetr() {
    return `${2 * (this._width + this._height)}см`;
  },

  get square() {
    return `${this._width * this._height}см`;
  },
};

rectangle.width = 12;
rectangle.height = 10;
console.log(rectangle.perimetr);
console.log(rectangle.square);
