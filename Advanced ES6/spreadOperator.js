

console.clear();

const theme = "SPREAD_OPERATOR"

console.log(theme);
console.log("\n");
$('#textText').text(theme) ;
$('#explainingText').text("View the Console!! - Read the "+ theme.toLowerCase() + ".js") ;


/* EL SPRED  */

/*VECTORES EN JAVASCRIPT*/ 

 
let mArr1 = [1,2,3,4,5,6] ; 
let mArr2 = [7,8,9,10] ; 

let mArr3Concat = mArr1.concat(mArr2) ; 
let mArr3 = [...mArr1 , ...mArr2] ; 

console.log(mArr3Concat) ;
console.log("\n");
console.log(mArr3) ;
console.log("\n");

/*OBJETOS EN JAVASCRIPT*/


let mObj1 = {
  name: 'John' ,
  lastName: 'Lark' 
};

let mObj2 = {
  age: 18 
};


let mObj3 = {...mObj1, ...mObj2}  ;

console.log(mObj3) ;
console.log("\n");
































