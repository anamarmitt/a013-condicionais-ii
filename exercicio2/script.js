let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

switch (nacionalidade) {
  case "brasileira":
    console.log("Você é do Brasil.");
    break;
  case "argentina":
    console.log("Você é do Argentina.");
    break;
  case "uruguaia":
    console.log("Você é do Uruguai.");
    break;
  case "chilena":
    console.log("Você é do Chile.");
    break;
  case "colombiana":
    console.log("Você é da Colombia.");
    break;
  default:
    console.log("Nacionalidade não encontrada.");
}
