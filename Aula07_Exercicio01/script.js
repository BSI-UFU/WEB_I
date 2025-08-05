function verificarNota() {
    let nota = parseFloat(document.getElementById("nota").value);
    let mensagem;
    if (nota < 0 || nota > 100){
        mensagem = "Nota inválida. Por favor, insira um valor entre 0 e 100.";
    }
    else{
        if (nota >= 90) {
            mensagem = "Excelente";
        } else if (nota >= 60) {
            mensagem = "Bom";
        } else {
            mensagem = "Precisa Melhorar";
        }
    }
    document.getElementById("desempenho").innerText = mensagem;
}