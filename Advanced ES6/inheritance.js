console.clear();

const theme = "INHERITANCE";

console.log(theme);
console.log("\n");
$("#textText").text(theme);
$("#explainingText").text(
  "View the Console!! - Read the " + theme.toLowerCase() + ".js"
);





class Person {

  constructor (name, birthYear) {
    this.name = name ;
    this.yearOfBirth = birthYear ;
  } 

  getDetails = () => {
    return `Name: ${this.name} and Age:  ${2021 - this.yearOfBirth}` ;
  }

}

var matias = new Person('Matias', 1995) ; 
console.log(matias.getDetails()) ;

class Pilot extends Person {

  // constructor (exp, type, license) {
  //   super("John Wick", 1980); 
  //   this.exp = exp ;
  //   this.type = type ;
  //   this.license = license ;
  // } 

   constructor (name,birthYear,exp, type, license) {
     super(name, birthYear); 
     this.exp = exp ;
     this.type = type ;
     this.license = license ;
   } 

  getData = () => {
    return `${this.getDetails()} and Exp: ${this.exp} and Type: ${this.type} and License: ${this.license}` ;
  }

}

const coper = new Pilot("Jack Cooper",1995,28,"Pilot","BT-7274") ;
console.log(coper) ;
console.log(coper.getData()) ;

















