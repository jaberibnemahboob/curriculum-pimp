<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restorant</title>
    <style>
        nav a{
            display: block;
            margin: 0.5em;
        }
    </style>
</head>
<body>
    <nav>
<?php
    $path = new array(__DIR__);
    foreach(scandir($path) as $file){
        if($file!="." &&
        $file!=".." &&
        is_dir($path.DS.$file)) echo '<a href="'.$file.'">'.$file.'</a>';
    }
?>
    </nav>
</body>
</html>

