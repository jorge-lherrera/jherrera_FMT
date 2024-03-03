// // Ex6-7-8

const checkNumber = async function () {
  let cep;
  while (true) {
    const getCep = function () {
      const cepNumber = prompt(`Informe o CEP desejado`);
      return cepNumber;
    };
    cep = getCep();
    if (cep === null) {
      throw new Error("Operação cancelada");
    }
    if (isNaN(cep) || cep <= 0 || cep.length !== 8) {
      alert("Por favor, digite um número válido de 8 dígitos");
    } else {
      break;
    }
  }
  return cep;
};

const checkCep = async function () {
  try {
    const cep = await checkNumber();
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();

    if (!("erro" in data) && data) {
      const confirmed = confirm(`
        Logradouro - ${data.logradouro ? data.logradouro : `N/A`}
        Complemento - ${data.complemento ? data.complemento : `N/A`}
        Bairro - ${data.bairro ? data.bairro : `N/A`}
        Localidade/Uf - ${data.localidade ? data.localidade : `N/A`} -- ${
        data.uf ? data.uf : `N/A`
      }

      Esses dados estão corretos?`);

      if (confirmed) {
        const saveConfirmed = confirm("Quer salvar esses dados?");
        if (saveConfirmed) {
          saveData(data);
        } else {
          alert("Dados não salvos. Aplicativo encerrado.");
        }
      } else {
        const retry = confirm("Quer fazer uma nova consulta?");
        if (retry) {
          return await checkCep();
        } else {
          alert("Aplicativo encerrado.");
        }
      }
    } else {
      throw new Error(`O CEP informado não é válido`);
    }
  } catch (error) {
    if (error.message !== "Operação cancelada") {
      if (error.message === "A chave não existe") {
        alert("A chave não existe. Tente novamente");
      } else {
        alert(error.message);
      }
      await checkCep();
    }
  }
};

const checkKey = async function (key) {
  const existingData = localStorage.getItem(key);

  if (existingData !== null) {
    const replaceExisting = confirm("A chave já existe. Quer substituir?");
    return replaceExisting;
  }

  return true;
};

const saveData = async function (data) {
  try {
    const key = prompt("Digite o nome da chave onde os dados serão salvos");

    if (key !== null && key.trim() !== "") {
      const shouldSave = await checkKey(key);

      if (shouldSave) {
        localStorage.setItem(key, JSON.stringify(data));
        alert("Dados salvos com sucesso");
      } else {
        saveData(data);
      }
    } else {
      alert("Nome de chave inválido. Por favor, tente novamente.");
      saveData(data);
    }
  } catch (error) {
    console.log(error);
    alert("Erro ao salvar dados");
  }
};

checkCep();
