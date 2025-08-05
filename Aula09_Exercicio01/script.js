function listarNumeros() {
  const ul = document.getElementById("lista1");
  ul.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
  }
}