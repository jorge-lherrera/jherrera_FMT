const prompt = require("prompt-sync")();

const numeros = [];

for (let i = 0; i < 5; i++) {
  const number = +prompt(`Insira um numero inteiro: `);
  numeros.push(number);
}

const quadrados = numeros.map((num) => num * num);

console.log(`O quadrado dos números é ${quadrados}`);
