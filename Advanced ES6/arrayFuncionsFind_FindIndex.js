console.clear();

const theme = "ARRAY_FUNCTIONS_FIND_FIND-INDEX";

console.log(theme);
console.log("\n");
$("#textText").text(theme);
$("#explainingText").text(
  "View the Console!! - Read the " + theme.toLowerCase() + ".js"
);


let numArr = [-1,-2,0,1, 2, 3, 4, 5, 6, 7];

console.log("numArr: " + numArr);
console.log("\n");

const find = numArr.find((item) => {
    return item % 2 === 0 && item > 0 ;
}) ;
console.log("find: " + find);
console.log("\n");


const findIndex = numArr.findIndex((item) => {
  return item % 2 === 0 && item > 0 ;
}) ;
console.log("findIndex: " + findIndex);
console.log("\n");

/* if no element coincides with the criteria used the return value will be "-1" */

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

 const resultArrObj = mArrObj.findIndex((item) => {
  return item.years == 10 ;
}) ;

console.log(resultArrObj);
