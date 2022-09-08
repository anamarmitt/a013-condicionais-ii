const num = Number(prompt(`Digite um número`));
//const num = 4;

console.log(num);

if (num % 2 === 0) {
  console.log("por 2.");
  if (num % 3 === 0) {
    console.log(" Divisível por 2 e 3.");
  }
} else if (num % 3 === 0) {
  console.log("Só por 3");
} else {
  console.log("Burra");
}

if (num % 2 === 0 || num % 2 === 0) {
  console.log("Divisível por 2 ou 3.");
}
