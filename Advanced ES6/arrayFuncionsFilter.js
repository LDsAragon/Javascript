console.clear();

const theme = "ARRAY_FUNCTIONS_FILTER";

console.log(theme);
console.log("\n");
$("#textText").text(theme);
$("#explainingText").text(
  "View the Console!! - Read the " + theme.toLowerCase() + ".js"
);


let numArr = [1, 2, 3, 4, 5, 6, 7];

const resultArr = numArr.filter((item) => {
    return item % 2 === 0  ;
}) ;
console.log("resultArr: " + resultArr);
console.log("\n");

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

 const resultArrObj = mArrObj.filter((item) => {
  return item.years <= 10 ;
}) ;

console.log(resultArrObj);
