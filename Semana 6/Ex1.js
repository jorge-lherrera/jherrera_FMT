const prompt = require("prompt-sync")();

const checkNumber = new Promise((resolve, reject) => {
  const number = +prompt(`Insira um numero inteiro: `);

  if (number % 2 === 0) {
    resolve(`Número validado é par`);
  } else {
    reject(`Error: número informado é impar`);
  }
});

checkNumber
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
