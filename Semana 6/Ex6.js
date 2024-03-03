// // Ex6-7-8

// localStorage.clear();

///////////////////////////////
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
      alert(`
       Logradouro - ${data.logradouro ? data.logradouro : `N/A`}
       Complemento - ${data.complemento ? data.complemento : `N/A`}
       Bairro - ${data.bairro ? data.bairro : `N/A`}
       Localidade/Uf - ${data.localidade ? data.localidade : `N/A`} -- ${
        data.uf ? data.uf : `N/A`
      }`);
      return data;
    } else {
      throw new Error(`O CEP inserido não está correto`);
    }
  } catch (error) {
    if (error.message !== "Operação cancelada") {
      alert(error.message);
      await checkCep();
    }
  }
};

checkCep();

// const saveData = async function () {
//   try {
//     const data = await checkCep();
//     console.log(data);
//     if (data) {
//       const checkData = prompt(`Os dados estão corretos SIM/NÃO`);

//       if (checkData.toLowerCase() === "sim") {
//         alert(`datos correctos`);
//       } else {
//         prompt(
//           `Desculpe o transtorno, você gostaria de fazer uma nova consulta`
//         );
//       }
//     } else {
//       throw new Error(`datos incorrectos`);
//     }
//   } catch (error) {
//     console.log(error);
//     await saveData();
//   }
// };

// saveData();

// const saveDataLocal = prompt(
//   `Deseja salvar as informações em localstore SIM/NÃO`
// );

//   prompt(`insira o nome da chave para salvar os dados`);
//   const checkLocalStore = localStorage.key(checkKey);
// };
// prompt(`A chave inserida está em uso, deseja substituir`);

// //       if (saveDataLocal.toLowerCase() === "sim") {
// //         const checkKey = prompt(`Insira um nome chave para salvar os dados`);
// //         console.log(checkKey);
// //         console.log(checkLocalStore);
// //         checkLocalStore.toLowerCase() === `endereco`
// //           : "";
// //       }
// //       const dataLocalStore = JSON.stringify(data);
// //       localStorage.setItem("endereco",
