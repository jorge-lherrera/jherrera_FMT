// Ex6-7-8

const checkCep = (async function () {
  try {
    const getCep = +prompt(`Informe o cep desejado`);
    const res = await fetch(`https://viacep.com.br/ws/${getCep}/json/`);
    const data = await res.json();
    alert(`
    Logradouro - ${data.logradouro}
    Complemento - ${data.logradouro}
    Bairro - ${data.bairro}
    Localidade/Uf - ${data.localidade}/${data.uf}
    `);
    console.log(getCep, data);
  } catch {
    console.log(`Error loading data`);
  }
})();
