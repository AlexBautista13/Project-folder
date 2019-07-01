//const str = '   good content    ';
//str.trim();//? good content 

//let arr = [ 'ughh', 'good', 'another good one', 'uugggg'];

const removeFirstAndLast = arr => {

    if (arr.length >= 3) {
        return arr.slice(1, -1);
        //TODO
    } else {
        throw new Error("You need at least three element in the array");
    }

}

removeFirstAndLast([1, 2, 3, 4, 5]);

removeFirstAndLast(['A', 'B', 'C', 'D']);

console.log(removeFirstAndLast([1, 2]));