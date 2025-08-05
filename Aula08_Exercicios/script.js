// Exercício 1
function calcularOperacao() {
  const n1 = parseFloat(document.getElementById('n1').value);
  const n2 = parseFloat(document.getElementById('n2').value);
  const op = document.getElementById('operacao').value;
  let resultado = '';
  if (!isNaN(n1) && !isNaN(n2)) {
    switch (op) {
      case '+': resultado = n1 + n2; break;
      case '-': resultado = n1 - n2; break;
      case '*': resultado = n1 * n2; break;
      case '/': resultado = n2 !== 0 ? (n1 / n2).toFixed(2) : 'Divisão por zero'; break;
    }
  } else {
    resultado = 'Preencha ambos os números corretamente.';
  }
  document.getElementById('res1').textContent = 'Resultado: ' + resultado;
}

// Exercício 2
const grupos = {faixa1: [], faixa2: [], faixa3: [], faixa4: []};
function adicionarPessoa() {
  const idade = parseInt(document.getElementById('idade2').value);
  const peso = parseFloat(document.getElementById('peso2').value);
  if (idade >= 1 && idade <= 10) grupos.faixa1.push(peso);
  else if (idade <= 20) grupos.faixa2.push(peso);
  else if (idade <= 30) grupos.faixa3.push(peso);
  else grupos.faixa4.push(peso);
}
function calcularMedias() {
  const media = arr => arr.length ? (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2) : 'N/A';
  document.getElementById('res2').innerHTML =
    `1-10 anos: ${media(grupos.faixa1)}<br>
     11-20 anos: ${media(grupos.faixa2)}<br>
     21-30 anos: ${media(grupos.faixa3)}<br>
     >30 anos: ${media(grupos.faixa4)}`;
}

// Exercício 3
function verificarPessoa() {
  const nome = document.getElementById('nome3').value;
  const idade = parseInt(document.getElementById('idade3').value);
  const altura = parseFloat(document.getElementById('altura3').value);
  if (idade >= 18 && idade <= 35 && altura > 1.86)
    document.getElementById('res3').textContent = 'Nome: ' + nome;
  else
    document.getElementById('res3').textContent = `Idade: ${idade}, Altura: ${altura}`;
}

// Exercício 4
const temperaturas = [];
function adicionarTemperatura() {
  const temp = parseFloat(document.getElementById('temp4').value);
  if (!isNaN(temp) && temperaturas.length < 10) temperaturas.push(temp);
}
function analisarTemperaturas() {
  if (temperaturas.length === 10) {
    const min = Math.min(...temperaturas);
    const max = Math.max(...temperaturas);
    const media = (temperaturas.reduce((a, b) => a + b, 0) / 10).toFixed(2);
    document.getElementById('res4').textContent = `Mínima: ${min}, Máxima: ${max}, Média: ${media}`;
  } else {
    document.getElementById('res4').textContent = 'Insira 10 temperaturas primeiro.';
  }
}

// Exercício 5
const valores = [];
function adicionarValor() {
  const v = parseFloat(document.getElementById('valor5').value);
  if (!isNaN(v)) valores.push(v);
}
function analisarValores() {
  if (valores.length === 0) return;
  const positivos = valores.filter(v => v > 0).length;
  const negativos = valores.filter(v => v < 0).length;
  const media = (valores.reduce((a, b) => a + b, 0) / valores.length).toFixed(2);
  const pPos = ((positivos / valores.length) * 100).toFixed(1);
  const pNeg = ((negativos / valores.length) * 100).toFixed(1);
  document.getElementById('res5').innerHTML =
    `Média: ${media}<br>
     Positivos: ${positivos} (${pPos}%)<br>
     Negativos: ${negativos} (${pNeg}%)`;
}