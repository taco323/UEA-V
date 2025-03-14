//variables

let taco = "tengo hambre pero me quedé sin dinero ayuda.";

let taco2= taco.toUpperCase();

let taco3= taco2.replace("DINERO", "CHAMBA");

//document

document.getElementById('dulce').innerHTML=taco;
document.getElementById('dulce2').innerHTML=taco2;
document.getElementById('dulce3').innerHTML=taco3;

//consola

console.log(taco.length)
console.log(taco.at(10))
console.log(taco.toUpperCase());
