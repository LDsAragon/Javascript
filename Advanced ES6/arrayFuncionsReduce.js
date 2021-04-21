console.clear();

const theme = "ARRAY_FUNCTIONS_REDUCE";

console.log(theme);
console.log("\n");
$("#textText").text(theme);
$("#explainingText").text(
  "View the Console!! - Read the " + theme.toLowerCase() + ".js"
);

/* PROBANDO EL ACUMULADOR */

let numArr = [1, 2, 3, 4, 5];

numArr.reduce((acc,item) => {
  console.log("item: " + item);
  console.log("acumulator: " +acc);
  return acc + 1 

} , 0) ;
console.log("\n");
// let newArray = []; 

const mArrObj = [
  {
    name: "Jonh Lark",
    experience: "FrontEnd",
    years: 20,
  },
  {
    name: "Jonh Smith",
    experience: "BackEnd",
    years: 5,
  },
  {
    name: "Jonh Doe",
    experience: "FullStack",
    years: 10,
  },
];


/* SUMANDO LOS AÑOS DE TODAS LAS PERSONAS EN EL ARRAY DE OBJETOS */
const result = mArrObj.reduce((acc,item) => {
  // console.log("item: " + item.years);
  // console.log("acumulator: " +acc);
  return acc + item.years 

} , 0) ;

console.log(result);
