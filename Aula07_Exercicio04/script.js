function calcularIR() {
      const salario = parseFloat(document.getElementById('salario').value);
      let aliquota = 0;
      let mensagem = '';

      if (isNaN(salario) || salario < 0) {
        mensagem = 'Por favor, digite um salário válido.';
      } else if (salario < 1903.99) {
        mensagem = 'Isento de imposto de renda.';
      } else if (salario < 2826.66) {
        aliquota = 7.5;
      } else if (salario < 3751.06) {
        aliquota = 15;
      } else if (salario < 4664.69) {
        aliquota = 22.5;
      } else {
        aliquota = 27.5;
      }

      if (aliquota > 0) {
        const imposto = (salario * (aliquota / 100)).toFixed(2);
        mensagem = `Alíquota: ${aliquota}%. Valor do imposto: R$ ${imposto}`;
      }

      document.getElementById('resultado').textContent = mensagem;
    }