class Pessoa {
  nome;
  idade;
  profissao;

  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }
}

class Cliente extends Pessoa {
  constructor(nome, idade, profissao, telefone, email, clienteDesde) {
    super(nome, idade, profissao);
    this.telefone = telefone;
    this.email = email;
    if (Cliente.validarFormatoData(clienteDesde)) {
      this.clienteDesde = clienteDesde;
    } else {
      throw new Error(
        "O formato da data do clienteDesde deve ser 'ANO-MES-DIA'"
      );
    }
  }

  static validarFormatoData(data) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(data);
  }
}
