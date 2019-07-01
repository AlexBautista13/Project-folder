//toThePowerOf(2, 3) => 8
//reduce 

const toThePowerOf = (num, exp) => {
  const items = Array(exp).fill(num);
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  return items.reduce(reducer);
};

//Array(3).fill(2);//? [2, 2, 2]
//2*2*2

[2, 2, 2]
// total:2
//currentValue:2
//4

// total:4
//currentValue:2
//8


  
toThePowerOf(2, 3); //? 
toThePowerOf(3, 3); //? 2
toThePowerOf(10, 120); //? 1.0000000000000006e+120
