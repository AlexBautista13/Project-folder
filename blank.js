// [1, 2, 3, 4, 5]

// 1
// 5
// 2
// 4
// 3

class ArrayPopper {
  constructor(arr) {
    this.arr = arr;
    this.atBeginning = true;
  }

  togglePopper() {
    this.atBeginning = !this.atBeginning;
    return this.atBeginning ? this.arr.pop() : this.arr.shift();
  }
}

const ap = new ArrayPopper([1, 2, 3, 4, 5]);

ap.togglePopper()//? 1
ap.togglePopper()//? 5
ap.togglePopper()//? 2
ap.togglePopper()//? 4
ap.togglePopper()//? 3


const strap = new ArrayPopper(['Hi', 'there', 'from', 'JS']);

strap.togglePopper();//? hi
strap.togglePopper();//? there
strap.arr;//?  [ 'there', 'from' ]
strap.togglePopper();//? from
strap.togglePopper();//? JS