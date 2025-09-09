
<!-- 2) Usando PHP, gere uma lista HTML (<ul>) que exiba
os números de 1 até 30, utilizando o loop for. -->

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Aula 15 - Exercicio 02</title>
    </head>
    <body>
        <h1>LISTA DE NÚMEROS DE 1 ATÉ 30</h1>
        <ul>
            <?php
                for ($i = 0; $i < 30; $i++) {
                    $j = $i + 1;
                    echo "<li>$j<br></li>";
                }
            ?>
        </ul>
    </body>
</html>