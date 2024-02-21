const prompt = require("prompt-sync")();

const numeros = [];

for (let i = 0; i < 5; i++) {
  const number = +prompt(`Insira um numero inteiro: `);
  numeros.push(number);
}

const pares = numeros.filter((num) => num % 2 === 0);

console.log(`Os números pares são ${pares}`);
