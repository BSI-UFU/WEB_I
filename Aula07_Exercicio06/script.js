function mostrarEscolaridade() {
      const opcoes = document.getElementsByName("escolaridade");
      let selecionado = "";

      for (let opcao of opcoes) {
        if (opcao.checked) {
          selecionado = opcao.value;
          break;
        }
      }

      const resultado = document.getElementById("resultado");
      if (selecionado) {
        resultado.textContent = "Escolaridade informada: " + selecionado;
      } else {
        resultado.textContent = "Por favor, selecione uma opção.";
        resultado.style.color = "red";
      }
    }