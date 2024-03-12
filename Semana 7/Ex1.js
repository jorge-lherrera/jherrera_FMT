// Ex de 1 a 6

class Producto {
  nome;
  preco;
  quantidade;

  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  vender(quantidadeVendida) {
    if (quantidadeVendida > this.quantidade) {
      console.log(
        `Estoque insuficiente para ${this.nome}. Quantidade disponível: ${this.quantidade}`
      );
      return false;
    }

    this.quantidade -= quantidadeVendida;
    console.log(
      `Venda de ${quantidadeVendida} unidades de ${this.nome} realizada com sucesso!`
    );
    console.log(`Quantidade restante: ${this.quantidade}`);
    return true;
  }

  repor(quantidadeReposta) {
    if (quantidadeReposta <= 0) {
      console.log(
        `Quantidade inválida para repor ${this.nome}. Quantidade informada: ${quantidadeReposta}`
      );
      return false;
    }

    this.quantidade += quantidadeReposta;
    console.log(
      `Estoque de ${this.nome} reposto com sucesso! Quantidade atualizada: ${this.quantidade}`
    );
    return true;
  }

  mostrarEstoque() {
    console.log(
      `O produto ${this.nome} possui ${this.quantidade} unidades disponíveis`
    );
  }

  atualizarPreco(novoPreco) {
    if (novoPreco <= 0) {
      console.log(
        `Preço inválido para ${this.nome}. Novo preço informado: ${novoPreco}`
      );
      return false;
    }

    this.preco = novoPreco;
    console.log(
      `Preço do produto ${this.nome} atualizado com sucesso! Novo preço: R$${this.preco}`
    );
    return true;
  }
}
