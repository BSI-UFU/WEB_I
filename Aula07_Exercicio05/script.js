function calcularPreco() {
      const checkboxes = document.querySelectorAll('#formSanduiche input[type="checkbox"]');
      let total = 4.00; // Preço base (pão, molho, mão de obra)

      checkboxes.forEach(cb => {
        if (cb.checked) {
          total += parseFloat(cb.value);
        }
      });

      document.getElementById('resultado').textContent = `Preço final do sanduíche: R$ ${total.toFixed(2)}`;
    }