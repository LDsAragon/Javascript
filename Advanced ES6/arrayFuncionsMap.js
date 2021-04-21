console.clear();

const theme = "ARRAY_FUNCTIONS_MAP";

console.log(theme);
console.log("\n");
$("#textText").text(theme);
$("#explainingText").text(
  "View the Console!! - Read the " + theme.toLowerCase() + ".js"
);

let mArr1 = [1, 2, 3, 4, 5, 6];
let newArray = [];

console.log(mArr1);

const doubleValues = (item) => {
  return item * 2;
};

for (let index = 0; index < mArr1.length; index++) {
  newArray.push(doubleValues(mArr1[index]));
}

console.log(newArray);
console.log("\n");

let newArrayMap = mArr1.map((data, pos) => {
  console.log(`item at pos: ${pos} is ${data}`);
  return data * 2;
});

console.log(newArrayMap);
console.log("\n");

const mArrObj = [
  {
    name: "Jonh Lark",
    experience: "FrontEnd",
    years: "5",
  },
  {
    name: "Jonh Smith",
    experience: "BackEnd",
    years: "5",
  },
  {
    name: "Jonh Doe",
    experience: "FullStack",
    years: "10",
  },
];


let newArrayMapObj = mArrObj.map((data, pos) => {
  console.log(data);
  return data ; 
});

console.log(newArrayMapObj);
console.log("\n");


let newArrayMapDistintctObj = mArrObj.map((data, pos) => {
  console.log(data);
  return {
      name: data.name ,
      experience: data.experience ,
  }  ; 
});

console.log(newArrayMapDistintctObj);
console.log("\n");