const prompt = require("prompt-sync")();

const frutas = [];

for (let i = 0; i < 3; i++) {
  const fruta = prompt(`Insira uma fruta: `);
  frutas.push(fruta);
}

console.log(`A segunda fruta é ${frutas[1]}`);

const maisUmaFruta = prompt(`Insira outra fruta: `);
frutas.push(maisUmaFruta);
frutas.shift(frutas[0]);
console.log(frutas);
