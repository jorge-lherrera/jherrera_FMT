// // Ex6-7-8

////////////////////////////////////////////////////////////////////////////////////////////////

// Función para verificar el número de CEP
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

// Función para verificar el CEP y mostrar los datos
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
        
¿Estos datos son correctos?`);

      if (confirmed) {
        const saveConfirmed = confirm("¿Desea guardar estos datos?");
        if (saveConfirmed) {
          const key = prompt(
            "Inserte el nombre de la llave donde se va a guardar"
          );
          if (key !== null && key.trim() !== "") {
            const existingData = localStorage.getItem(key);
            if (existingData !== null) {
              const replaceExisting = confirm(
                "La llave ya existe. ¿Desea reemplazarla?"
              );
              if (!replaceExisting) {
                return await checkCep();
              }
            }
            localStorage.setItem(key, JSON.stringify(data));
            alert("Datos guardados exitosamente");
            return data;
          } else {
            alert("Nombre de llave inválido. Por favor, inténtelo de nuevo.");
            return await checkCep();
          }
        } else {
          alert("Datos no guardados. Aplicación cerrada.");
          return null;
        }
      } else {
        const retry = confirm("¿Desea hacer una nueva consulta?");
        if (retry) {
          return await checkCep();
        } else {
          alert("Aplicación cerrada.");
          return null;
        }
      }
    } else {
      throw new Error(`El CEP ingresado no es válido`);
    }
  } catch (error) {
    if (error.message !== "Operação cancelada") {
      alert(error.message);
      await checkCep();
    }
  }
};

// Función para iniciar el proceso de guardar datos
const saveData = async function () {
  try {
    const data = await checkCep();
    if (data !== null) {
      // Aquí podrías hacer algo más con los datos si es necesario
    }
  } catch (error) {
    console.log(error);
    await saveData();
  }
};

// Iniciar el proceso
saveData();
