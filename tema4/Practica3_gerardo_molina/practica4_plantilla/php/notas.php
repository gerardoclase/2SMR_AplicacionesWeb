<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Gerardo Molina</h1>
    <?php
    $modulo = "Aplicaciones Web";

    $nota1 = 7;
    $nota2 = 9;
    $nota3 = 8;

    $media = ($nota1 + $nota2 + $nota3) / 3;
    echo "$modulo: mis notas son $nota1, $nota2 y $nota3. Mi media es $media.<br>";

    if ($media >=5) {
        echo "Aprobado";
    } else {
        echo "Suspenso";
    }

    ?>
</body>
</html>