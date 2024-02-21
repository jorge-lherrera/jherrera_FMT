// EX 7

const products = ["Hortifruti", "Laticínios", "Carnes", "Peixes", "Aves"];
const buyed = {};
let higherQuantityProduct = "";
let higherQuantity = null;

while (true) {
  const choosedProduct = +prompt(
    `Qual produto você deseja comprar?
    (1) Hortifruti
    (2) Laticínios
    (3) Carnes
    (4) Peixes
    (5) Aves
    (6) Fechar pedido`
  );

  if (choosedProduct === 6) {
    break;
  }

  if (choosedProduct === null || choosedProduct < 1 || choosedProduct > 6) {
    alert("Resposta inválida. Por favor, digite um número entre 1 e 6.");
    continue;
  }

  const productIndex = choosedProduct - 1;
  const amount = +prompt(
    `Quantas unidades de ${products[productIndex]} você deseja comprar?`
  );

  if (isNaN(amount) || amount <= 0) {
    alert("Quantidade inválida. Por favor, digite um número válido.");
    continue;
  }

  const productName = products[productIndex];
  buyed[productName] = (buyed[productName] || 0) + amount;

  if (buyed[productName] > higherQuantity) {
    higherQuantityProduct = productName;
    higherQuantity = buyed[productName];
  }
}

if (Object.keys(buyed).length > 0) {
  console.log(
    `O produto que você comprou em maior quantidade foi ${higherQuantityProduct} (${buyed[higherQuantityProduct]} unidades).`
  );
} else {
  console.log("Nenhum produto foi comprado.");
}
