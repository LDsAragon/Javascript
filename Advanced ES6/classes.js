console.clear();

const theme = "CLASSES";

console.log(theme);
console.log("\n");
$("#textText").text(theme);
$("#explainingText").text(
  "View the Console!! - Read the " + theme.toLowerCase() + ".js"
);


function Person(name, birthYear){
  this.name = name ; 
  this.yearOfBirth = birthYear ; 

  this.getDetails = function() {
    return "Name: " + this.name + " and Age: " + (2021 - this.yearOfBirth ) ;
  }
}


var john = new Person('John', 1995) ; 
console.log(john.getDetails()) ;
console.log("\n");


class modernPerson {

  constructor (name, birthYear) {
    this.name = name ;
    this.yearOfBirth = birthYear ;
  } 

  getDetails = () => {
    return `Name: ${this.name} and Age:  ${2021 - this.yearOfBirth}` ;
  }

}

var matias = new modernPerson('Matias', 1995) ; 
console.log(matias.getDetails()) ;












