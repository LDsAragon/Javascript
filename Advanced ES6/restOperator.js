

console.clear();

const theme = "REST_OPERATOR"

console.log(theme);
console.log("\n");

const mSum = (num1, num2)  => console.log(num1 + num2);  

mSum(1,2,3,4,5) ;
console.log("\n");

const mSumArgs = (... args)  => console.log(args);  

mSumArgs(1,2,3,4,5) ;
console.log("\n");
$('#textText').text(theme) ;
$('#explainingText').text("View the Console!! - Read the "+ theme.toLowerCase() + ".js") ;



const mSumArgsLoop = (... args)  => {
  let sum = 0 ;
  for (let index = 0; index < args.length; index++) {
      sum += args[index] ; 
  }

  console.log(sum)
} 

mSumArgsLoop(1,2,3,4,5,6,7,8,9) ;
console.log("\n");


const mSumMultipleParametersAndArgsLoop = (num1,num2, ... args)  => {
  let sum = 0 ;
  console.log(num1) ;
  console.log(num2) ;
  console.log(args) ;

  for (let index = 0; index < args.length; index++) {
      sum += args[index] ; 
  }

  console.log(sum) ;
} 


mSumMultipleParametersAndArgsLoop(1,2,3,4,5,6,7,8,9) ;
console.log("\n");
































