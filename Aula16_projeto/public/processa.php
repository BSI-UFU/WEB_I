<?php
include("../config/db.php");

$action = $_POST['action'] ?? $_GET['action'] ?? '';

if ($action === "create") {
    $sql = "INSERT INTO colaboradores (nome, telefone, endereco, experiencia, salario) 
            VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssii", $nome, $telefone, $endereco, $experiencia, $salario);

    // Pegando e validando inputs
    $nome = trim($_POST['nome']);
    $telefone = trim($_POST['telefone']);
    $endereco = trim($_POST['endereco']);
    $experiencia = (int)$_POST['experiencia'];
    $salario = (float)$_POST['salario'];

    $stmt->execute();
    $stmt->close();

    header("Location: index.php");
    exit;
}

if ($action === "update") {
    $sql = "UPDATE colaboradores 
            SET nome=?, telefone=?, endereco=?, experiencia=?, salario=? 
            WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssdii", $nome, $telefone, $endereco, $salario, $experiencia, $id);

    // Dados
    $id = (int)$_POST['id'];
    $nome = trim($_POST['nome']);
    $telefone = trim($_POST['telefone']);
    $endereco = trim($_POST['endereco']);
    $experiencia = (int)$_POST['experiencia'];
    $salario = (float)$_POST['salario'];

    $stmt->execute();
    $stmt->close();

    header("Location: index.php");
    exit;
}

if ($action === "delete") {
    $sql = "DELETE FROM colaboradores WHERE id=?";
    $stmt = $conn->prepare($sql);
    $id = (int)$_GET['id'];
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->close();

    header("Location: index.php");
    exit;
}

?>
