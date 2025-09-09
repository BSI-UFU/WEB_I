<?php include("../config/db.php"); ?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Gerenciamento de Colaboradores</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <h1>Cadastro de Colaboradores</h1>

    <!-- Formulário -->
    <form action="processa.php" method="POST">
        <input type="hidden" name="action" value="create">
        
        <label>Nome Completo:</label>
        <input type="text" name="nome" required><br>

        <label>Telefone:</label>
        <input type="text" name="telefone" pattern="\d{8,15}" required><br>

        <label>Endereço:</label>
        <input type="text" name="endereco" required><br>

        <label>Anos de Experiência:</label>
        <input type="number" name="experiencia" min="0" required><br>

        <label>Salário (R$):</label>
        <input type="number" step="0.01" min="0" name="salario" required><br>

        <button type="submit">Adicionar</button>
    </form>

    <hr>

    <!-- Tabela -->
    <h2>Lista de Colaboradores</h2>
    <table border="1" cellpadding="8">
        <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>Experiência</th>
            <th>Salário</th>
            <th>Ações</th>
        </tr>

        <?php
        $sql = "SELECT * FROM colaboradores ORDER BY id DESC";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->get_result();

        while ($colab = $result->fetch_assoc()) {
            echo "<tr>
                <td>{$colab['nome']}</td>
                <td>{$colab['telefone']}</td>
                <td>{$colab['endereco']}</td>
                <td>{$colab['experiencia']} anos</td>
                <td>R$ {$colab['salario']}</td>
                <td>
                    <a href='editar.php?id={$colab['id']}'>Editar</a> | 
                    <a href='processa.php?action=delete&id={$colab['id']}' onclick='return confirm(\"Excluir colaborador?\")'>Excluir</a>
                </td>
            </tr>";
        }
        $stmt->close();
        ?>
    </table>
</body>
</html>
