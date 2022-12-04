<?php
session_start();

if($_POST['login'] == 'ecometria' && $_POST['password'] == 'ecometria'){
    $_SESSION['user'] = true;
    echo json_encode(1);
}else{
    echo json_encode(0);
}

?>