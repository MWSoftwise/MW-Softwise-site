<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MW Softwise</title>
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="mailing.css">
    
</head>
<body>

<header>
<?php 

$to     = 'mwsoftwise@gmail.com';
$name   = $_POST['name'];
$email  = $_POST['email'];
$subject= 'Nowy e-mail od' . $name . '(' . $email . ')';
$message= $_POST['msg'];
$headers =  'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'From: ' . $email . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; 


mail($to, $subject, $message, $headers);
?>
    <h1>Message sent succesfully</h1>
    <a href="index.html"><button>Back to home page</button></a>
</header>
    
</body>
</html>

