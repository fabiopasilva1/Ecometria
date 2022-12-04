<?php

// O remetente deve ser um e-mail do seu domínio conforme determina a RFC 822.
// O return-path deve ser ser o mesmo e-mail do remetente.


// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


$headers .= "From: contato@unicomsi.com.br\r\n"; // remetente
$headers .= "Return-Path: contato@unicomsi.com.br\r\n"; // return-path


$message = '<b>Nome:</b> ' . $_POST['name'] . '<br>';
$message .= '<b>Telefone</b>: ' . $_POST['telefone'] . '<br>';
$message .= '<b>Email: </b>' . $_POST['email'] . '<br>';
$message .= '<b>Mensagem: </b>' . $_POST['message'] . '<br>';

$envio = mail("maycon.douglasn@gmail.com", 'Contato do site: unicomsi.com.br', $message, $headers);

if($envio)
    echo "success|Obrigado, em breve entraremos em contato.";
else
    echo "error|Não foi possivel enviar seu email, tente novamente mais tarde.";;