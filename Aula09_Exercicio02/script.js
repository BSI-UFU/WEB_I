const frutas = [];
function adicionarFruta() {
  const f = document.getElementById("fruta").value;
  if (f) frutas.push(f);
  document.getElementById("fruta").value = "";
}
function ordenarFrutas() {
  frutas.sort();
}
function exibirFrutas() {
  const lista = document.getElementById("listaFrutas");
  lista.innerHTML = "";
  frutas.forEach(fruta => {
    const item = document.createElement("li");
    item.textContent = fruta;
    lista.appendChild(item);
  });
}