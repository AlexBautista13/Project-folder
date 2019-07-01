const isEqual = (obj1, obj2) => {
    const objkeys = Object.keys(obj1); //? ['name', 'age']
    const objkeys = Object.keys(obj2); //? ['name', 'age']

    if (obj1Keys. length !== obj2Keys.length) {
        return false;
    }

    for(let objKey of obj1Keys) {
        // if (obj1[objKey])
    }
}
const obj1 = {
    name: "kristine",
    age: 13
}

const obj2 = {
    name: "kristine",
    age: 13
}

obj1 ==obj2//? false | {name: 'Kristine', age:13}
isEqual(obj1, obj2);//? 


// const isEqual = (obj1, obj2) => {
    // const obj1Keys = Object.keys(obj1);
    // const obj2Keys = Object.keys(obj2);
  
    // if (obj1Keys.length !== obj2Keys.length) {
    //   return false;
    // }
  
    // for (let objKey of obj1Keys) {
    //   if (obj1[objKey] !== obj2[objKey]) {
        // return false;
    //   }
    // }
  
    // return true;
//   };
  
//   const obj1 = {
    // name: "Kristine",
    // age: 13,
    // favorites: {
    //   food: "Pizza",
    //   vacation: "Disneyland"
    // }
//   };
  
//   const obj2 = {
    // name: "Kristine",
    // age: 13,
    // favorites: {
    //   food: "Pizza",
    //   vacation: "Disneyland"
    // }
//   };
  
//   obj1 == obj2;
//   isEqual(obj1, obj2);