const prettyPrice = (grossPrice, extension) => {
  if (Number.isInteger(extension)) {
    extension = extension * 0.01;
  }
  return Math.floor(grossPrice) + extension;
};
  
prettyPrice(2.2, 0.95); //?
prettyPrice(2.2, 95); //?
prettyPrice(2.2, 0); //?
prettyPrice(2.2, 99); //?