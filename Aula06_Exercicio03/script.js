function ocultarParagrafos() {
  const paragrafos = document.querySelectorAll('.paragrafo');
  paragrafos.forEach(p => p.style.display = 'none');
}

function exibirParagrafos() {
  const paragrafos = document.querySelectorAll('.paragrafo');
  paragrafos.forEach(p => p.style.display = 'block');
}
