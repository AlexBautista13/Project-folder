const userOne = {
    firstName: "Kristine",
    lastName: "Hudgens"
}

const userOne = {
    firstName: "Tiffany",
    lastName: "Hudgens"
}

 const fullName = function() {
     return `${this.lastName}, ${this.firstName}`;
 }


const Kristine = fullName.bind(userOne);
const Tiffany = fullName.bind(userTwo);

Kristine()//? Hudgens, Kristine
Tiffany()//? Hudgens, Tiffany