

console.clear();

const theme = "TEMPLATE STRINGS"

console.log(theme);
console.log("\n");
$('#textText').text(theme) ;
$('#explainingText').text("View the Console!! - Read the "+ theme.toLowerCase() + ".js") ;

let firstName = "LDsAragon";
let lastName = "Defender of Righteousness";

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(getFullName(firstName, lastName));

/* Variables Let */

firstName = "Raziel";
lastName = "Devourer of Souls";

console.log(getFullName(firstName, lastName));

/* Expresion Armada */

const mGreetings = `Hello ${getFullName(firstName, lastName)}`;

console.log(mGreetings);

let red = 200;
let green = 175;
let blue = 150;
let alpha = 125;

const rgbaExp = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";

const rgbaExp_ModernWay = `rgba(${red}, ${green}, ${blue}, ${alpha} )`;

console.log(rgbaExp);

console.log(rgbaExp_ModernWay);
