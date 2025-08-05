class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  mensagem() {
    return `Nome: ${this.nome}, Idade: ${this.idade}`;
  }
}
function criarPessoa() {
  const nome = document.getElementById("nomePessoa").value;
  const idade = document.getElementById("idadePessoa").value;
  const pessoa = new Pessoa(nome, idade);
  document.getElementById("resPessoa").textContent = pessoa.mensagem();
}
function limparCampos() {
  document.getElementById("nomePessoa").value = "";
  document.getElementById("idadePessoa").value = "";
  document.getElementById("resPessoa").textContent = "";
}