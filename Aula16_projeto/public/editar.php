<?php
include("../config/db.php");
$id = $_GET['id'];
$sql = "SELECT * FROM colaboradores WHERE id=$id";
$result = $conn->query($sql);
$colab = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Editar Colaborador</title>
</head>
<body>
    <h1>Editar Colaborador</h1>
    <form action="processa.php" method="POST">
        <input type="hidden" name="action" value="update">
        <input type="hidden" name="id" value="<?= $colab['id'] ?>">

        <label>Nome:</label>
        <input type="text" name="nome" value="<?= $colab['nome'] ?>" required><br>

        <label>Telefone:</label>
        <input type="text" name="telefone" value="<?= $colab['telefone'] ?>" required><br>

        <label>Endereço:</label>
        <input type="text" name="endereco" value="<?= $colab['endereco'] ?>" required><br>

        <label>Experiência:</label>
        <input type="number" name="experiencia" value="<?= $colab['experiencia'] ?>" min="0" required><br>

        <label>Salário:</label>
        <input type="number" step="0.01" name="salario" value="<?= $colab['salario'] ?>" required><br>

        <button type="submit">Salvar</button>
    </form>
    <br>
    <a href="index.php">Voltar</a>
</body>
</html>
