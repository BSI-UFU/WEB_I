<?php
/*1) Desenvolva um script em PHP que exiba uma lista
de notas e informe se cada aluno foi Aprovado ou
Reprovado. As notas dos alunos são fornecidas em
um array. O critério para aprovação é ter uma nota
maior ou igual a 60. A saída deve ser uma página
HTML que apresente os resultados de cada aluno,
informando a nota e o respectivo status de aprovação.
Notas: 35, 77, 65, 49, 28 e 95.*/

$notas = [35, 77, 65, 49, 28, 95];
echo "<h1>Resultado dos Alunos</h1>";
echo "<ul>";
foreach ($notas as $nota) {
    $status = ($nota >= 60) ? "Aprovado" : "Reprovado";
    echo "<li>Nota: $nota - Status: $status</li>";
}   
echo "</ul>";
?>