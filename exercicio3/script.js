//código a ser reescrito

//if(nome === "José"){
//	console.log("Oi, Zé!");
//} else {
//	console.log("Olá, "+nome);
//}

const nome = prompt("Qual seu nome?");

nome === "José" ? console.log("Oi,Zé!") : console.log(`Olá ${nome}!`);

const idade = Number(prompt("Qual a sua idade?"));

idade >= 18
  ? console.log("Pode tirar a carteira de motorista.")
  : console.log("Ainda não pode tirar a carteira de motorista.");

//if (idade >= 18) {
// console.log("pode tirar carteira de motorista!");
//} else {
// console.log("Ainda não pode tirar carteira de motorista");
//}
