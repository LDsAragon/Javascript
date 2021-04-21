

console.clear();

const theme = "FAT_ARROW_FUNCTIONS"

console.log(theme);
console.log("\n");
$('#textText').text(theme) ;
$('#explainingText').text("View the Console!! - Read the "+ theme.toLowerCase() + ".js") ;

let firstName = "LDsAragon";
let lastName = "Defender of Righteousness";


function greetings (name){
  return `Welcome ${name}` ; 
}

console.log("Greetings") ;
console.log( greetings("LDsAragon") ) ;
console.log("\n");


const mGreetings = name => {
  return `Welcome ${name}` ; 
}

console.log("mGreetings") ;
console.log( mGreetings("LDsAragon") ) ;
console.log("\n");

const mGreetingsMoreArguments = (name , lastName) => {
  return `Welcome ${name} ${lastName}` ; 
}

console.log("mGreetingsMoreArguments") ;
console.log( mGreetingsMoreArguments(firstName, lastName) ) ; 
console.log("\n");


/*
  When there is only one return value, the curly braces are not necesary and the return statement is not necesary 
*/
const mGreetingsReduced = name =>  `Welcome ${name}` ; 
console.log("mGreetingsReduced") ;
console.log( mGreetingsReduced(firstName) ) ; 
console.log("\n");







