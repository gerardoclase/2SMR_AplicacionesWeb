<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Inscripción recibida</title>
</head>
<body>
    <!-- CAMBIA: pon tu nombre y apellidos -->
    <h1>Práctica 3 de Gerardo Molina Bruque</h1>
    <h2>Inscripción recibida</h2>

    <?php
        // ESCRIBE AQUÍ TU CÓDIGO PHP:
        // 1. Recoge el nombre, la edad y el ciclo que llegan del formulario
        // 2. Muestra un saludo con el nombre y el ciclo
        // 3. Muestra si es mayor de edad (18 o más) o menor de edad
        $nombre = $_POST["nombre"];
        $edad = intval($_POST["edad"]);
        $curso = $_POST["curso"];

        echo "Hola $nombre, te has inscrito en $ciclo.<br>";

        if($edad >=18){
            echo "Eres mayor de edad ($edad años)";
        }
        else($edad <18){
            echo "Eres mayor de edad ($edad años)";
        }
    ?>

    <p><a href="formulario.html">Volver al formulario</a></p>
</body>
</html>
