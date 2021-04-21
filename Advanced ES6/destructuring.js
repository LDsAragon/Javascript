

console.clear();

const theme = "DESTRUTURING"

console.log(theme);
console.log("\n");
$('#textText').text(theme) ;
$('#explainingText').text("View the Console!! - Read the "+ theme.toLowerCase() + ".js") ;

/*  IF I AM DESTRUCTURING A VECTOR, THE ORDER IN WICH  I DESTRUCTURE  IS IMPORTANT */

/*WITH ARRAYS*/

let mArr1 = ["John","Manuel","Lark"] ; 


let [firstName, middleName, lastName] = mArr1 ; 

console.log(mArr1) ;
console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log("\n");


/*WITH VARIABLES AND SPLIT */

let name = "John Manuel Lark" ;
let mArr2 = name.split(" ") ; 
let [firstName1, middleName1, lastName1] = mArr2 ; 

console.log(name);
console.log(mArr2);
console.log(firstName1);
console.log(middleName1);
console.log(lastName1);
console.log("\n");


/*  IF I AM DESTRUCTURING AN OBJECT, THE ORDER IS IRRELEVANT.
THE MOST IMPORTANT IS THAT THE NAME OF THE VARIABLE MATCH THE NAME OF THE KEYS IN THE OBJECT */


const person = {
  firstName2: 'John' ,
  middleName2: 'Manuel' ,
  lastName2: 'Lark'  ,
  age: 28
};

console.log(person);

let {lastName2, firstName2, middleName2} = person ; 

console.log(firstName2);
console.log(middleName2);
console.log(lastName2);
console.log("\n");


























