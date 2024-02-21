const prompt = require("prompt-sync")();

const numeros = [];

for (let i = 0; i < 5; i++) {
  const number = +prompt(`Insira um numero inteiro: `);
  numeros.push(number);
}

const numerosOrdenados = numeros;

console.log(
  `A ordem crescente dos números é ${numerosOrdenados.sort((a, b) => a - b)}`
);
