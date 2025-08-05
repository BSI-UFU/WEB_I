let contador = 1;

function adicionarItem() {
    const lista = document.getElementById("minhaLista"); //Obtém a lista onde os itens serão adicionados
    const novoItem = document.createElement("li"); //Cria um novo elemento de lista
    novoItem.textContent = "Item " + contador; //Define o texto do novo item
    lista.appendChild(novoItem); //Adiciona o novo item à lista
    contador++; //Incrementa o contador para o próximo item
}