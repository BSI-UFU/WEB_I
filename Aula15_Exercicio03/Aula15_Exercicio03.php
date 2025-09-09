<?php
$produtos = array(
    array("nome" => "Produto 1", "preco" => 10.00, "quantidade" => 5),
    array("nome" => "Produto 2", "preco" => 20.00, "quantidade" => 3),
    array("nome" => "Produto 3", "preco" => 30.00, "quantidade" => 2)
);
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Produtos</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Lista de Produtos</h1>
    <?php if (!empty($produtos)): ?>
        <table>
            <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Quantidade</th>
            </tr>
            <?php foreach ($produtos as $produto): ?>
            <tr>
                <td><?php echo $produto['nome']; ?></td>
                <td><?php echo "R$ " . number_format($produto['preco'], 2, ',', '.'); ?></td>
                <td><?php echo $produto['quantidade']; ?></td>
            </tr>
            <?php endforeach; ?>
        </table>
    <?php else: ?>
        <p>Nenhum produto encontrado.</p>
    <?php endif; ?>
</body>
</html>
