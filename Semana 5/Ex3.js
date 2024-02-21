const prompt = require("prompt-sync")();

const numeros = [];

for (let i = 0; i < 5; i++) {
  const number = +prompt(`Insira um numero inteiro: `);
  numeros.push(number);
  console.log(`O numero insertado e ${numeros[i]}`);
}
