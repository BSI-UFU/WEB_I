function criarCarro() {
  const marca = document.getElementById("marca").value;
  const modelo = document.getElementById("modelo").value;
  const ano = document.getElementById("ano").value;
  const carro = {
    marca: marca,
    modelo: modelo,
    ano: ano,
    descricao: function() {
      return `Carro: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
  };
  document.getElementById("resCarro").textContent = carro.descricao();
}