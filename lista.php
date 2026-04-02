<?php
if ($_GET['pass'] !== 'itaqui6576') {
    die("Acceso denegado.");
}

$host = "localhost";
$db   = "c1671739_i";
$user = "c1671739_i";
$pass = "Itaqui6576";

$pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
$invitados = $pdo->query("SELECT * FROM rsvp_confirmations ORDER BY created_at DESC")->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Lista de Invitados - Martín Almada</title>
    <style>
        body { font-family: sans-serif; background: #f4f4f9; padding: 20px; }
        table { width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background-color: #6d28d9; color: white; }
        tr:hover { background-color: #f1f1f1; }
        .asiste { color: green; font-weight: bold; }
        .no-asiste { color: red; }
    </style>
</head>
<body>
    <h2>Confirmaciones de Asistencia</h2>
    <table>
        <thead>
            <tr>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Asistencia</th>
                <th>Teléfono</th>
                <th>Notas</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($invitados as $i): ?>
            <tr>
                <td><?= $i['created_at'] ?></td>
                <td><?= htmlspecialchars($i['name']) ?></td>
                <td class="<?= $i['attendance'] == 'asistire' ? 'asiste' : 'no-asiste' ?>">
                    <?= $i['attendance'] == 'asistire' ? 'SÍ' : 'NO' ?>
                </td>
                <td><?= htmlspecialchars($i['phone']) ?></td>
                <td><?= htmlspecialchars($i['notes']) ?></td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>
