<?php

// O remetente deve ser um e-mail do seu domínio conforme determina a RFC 822.
// O return-path deve ser ser o mesmo e-mail do remetente.


// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


$headers .= "From: contato@unicomsi.com.br\r\n"; // remetente
$headers .= "Return-Path: contato@unicomsi.com.br\r\n"; // return-path


$message = 'Mensagem do site ecometria.eco.br <br><br>';
$message .= '   <style>
                    td {
                       padding:10px;
                    }
                </style>
                <table style="width:100%;">
                    <tr>
                        <td>Nome</td>
                        <td>'.$_POST['name'].'</td>
                    </tr>
            
                    <tr>
                        <td>Email</td>
                        <td>'.$_POST['email'].'</td>
                    </tr>
                    <tr>
                        <td>Telefone</td>
                        <td>'.$_POST['phone'].'</td>
                    </tr>
            
                    <tr>
                        <td colspan="2" style="background:#c7d2ff;"><strong>Captação de água</strong></td>
                    </tr>
            
                    <tr>
                        <td><strong>Captação Superficial</strong></td>
                        <td>'.$_POST['fm-1'].'</td>
                    </tr>
            
                    <tr>
                        <td>Unidades de Captação</td>
                        <td>'.$_POST['fm-2'].'</td>
                    </tr>
            
                    <tr>
                        <td>Bombas</td>
                        <td>'.$_POST['fm-3'].'</td>
                    </tr>
            
                    <tr>
                        <td><strong>Poços Profundos</strong></td>
                        <td>'.$_POST['fm-4'].'</td>
                    </tr>
            
                    <tr>
                        <td>Unidades de Captação</td>
                        <td>'.$_POST['fm-5'].'</td>
                    </tr>
            
                    <tr>
                        <td>Bombas</td>
                        <td>'.$_POST['fm-6'].'</td>
                    </tr>
            
                    <tr>
                        <td colspan="2" style="background:#c7d2ff;"><strong>Captação de água</strong></td>
                    </tr>
            
                    <tr>
                        <td>Extensão da Rede Adutora (Km)</td>
                        <td>'.$_POST['fm-7'].'</td>
                    </tr>
                    <tr>
                        <td><strong>Medidores</strong></td>
                        <td>'.$_POST['fm-8'].'</td>
                    </tr>
                    <tr>
                        <td>Ultrassônicos</td>
                        <td>'.$_POST['fm-9'].'</td>
                    </tr>
            
                    <tr>
                        <td>Eletromagnéticos</td>
                        <td>'.$_POST['fm-10'].'</td>
                    </tr>
            
                    <tr>
                        <td>Hidrômetros</td>
                        <td>'.$_POST['fm-11'].'</td>
                    </tr>
            
                    <tr>
                        <td>Outros</td>
                        <td>'.$_POST['fm-12'].'</td>
                    </tr>
            
                    <tr>
                        <td>Tomadas de Pressão</td>
                        <td>'.$_POST['fm-13'].'</td>
                    </tr>
            
                    <tr>
                        <td colspan="2" style="background:#c7d2ff;"><strong>Tratamento de água</strong></td>
                    </tr>
            
            
                    <tr>
                        <td>ETA’S</td>
                        <td>'.$_POST['fm-14'].'</td>
                    </tr>
                    <tr>
                        <td>Macros Medidores</td>
                        <td>'.$_POST['fm-15'].'</td>
                    </tr>
            
                    <tr>
                        <td>Sensores de Qualidade</td>
                        <td>'.$_POST['fm-16'].'</td>
                    </tr>
            
                    <tr>
                        <td>Dosadores</td>
                        <td>'.$_POST['fm-17'].'</td>
                    </tr>
            
                    <tr>
                        <td>Volume (m³) – Prod. Mensal</td>
                        <td>'.$_POST['fm-18'].'</td>
                    </tr>
            
                    <tr>
                        <td colspan="2" style="background:#c7d2ff;"><strong>Tratamento de água</strong></td>
                    </tr>
            
                    <tr>
                        <td>Extensão da Rede (Km)</td>
                        <td>'.$_POST['fm-19'].'</td>
                    </tr>
            
                    <tr>
                        <td>Setores</td>
                        <td>'.$_POST['fm-20'].'</td>
                    </tr>
            
                    <tr>
                        <td>Macro Medidores</td>
                        <td>'.$_POST['fm-21'].'</td>
                    </tr>
            
                    <tr>
                        <td>Reservatórios</td>
                        <td>'.$_POST['fm-22'].'</td>
                    </tr>
            
                    <tr>
                        <td>Ligações (Clientes)</td>
                        <td>'.$_POST['fm-23'].'</td>
                    </tr>
            
                    <tr>
                        <td>Ligações (Grandes Clientes) que m³/mês</td>
                        <td>'.$_POST['fm-24'].'</td>
                    </tr>
            
                    <tr>
                        <td>Ligações com Hidrômetro</td>
                        <td>'.$_POST['fm-25'].'</td>
                    </tr>
            
                    <tr>
                        <td>VRPs - Válvulas Red. Pressão</td>
                        <td>'.$_POST['fm-26'].'</td>
                    </tr>
            
                    <tr>
                        <td>Boosters</td>
                        <td>'.$_POST['fm-27'].'</td>
                    </tr>
            
                    <tr>
                        <td>Tomadas de Pressão (Pontos Críticos)</td>
                        <td>'.$_POST['fm-28'].'</td>
                    </tr>
            
                    <tr>
                        <td>Estações Elevatórias</td>
                        <td>'.$_POST['fm-29'].'</td>
                    </tr>
            
            
                    <tr>
                        <td colspan="2" style="background:#c7d2ff;"><strong>Faturamento</strong></td>
                    </tr>
            
            
                    <tr>
                        <td>Volume Mensal (m³)</td>
                        <td>'.$_POST['fm-30'].'</td>
                    </tr>
            
                    <tr>
                        <td>Volume/Ligação/Mês (m³)</td>
                        <td>'.$_POST['fm-31'].'</td>
                    </tr>
            
                    <tr>
                        <td>Valor Mensal (R$)</td>
                        <td>'.$_POST['fm-32'].'</td>
                    </tr>
            
                    <tr>
                        <td>Valor Mensal (R$) Grandes Consumidores</td>
                        <td>'.$_POST['fm-33'].'</td>
                    </tr>
            
                    <tr>
                        <td>Valor/Ligação/Mês (R$) Grandes Consumidores</td>
                        <td>'.$_POST['fm-34'].'</td>
                    </tr>
                    <tr>
                        <td>Valor/Ligação/Mês (R$)</td>
                        <td>'.$_POST['fm-35'].'</td>
                    </tr>
            
            
                    <tr>
                        <td colspan="2" style="background:#c7d2ff;"><strong>Coleta, tratamento e disposição - esgoto</strong></td>
                    </tr>
            
                    <tr>
                        <td><strong>Estações Elevatórias</strong></td>
                        <td>'.$_POST['fm-36'].'</td>
                    </tr>
            
            
                    <tr>
                        <td>ETE’s</td>
                        <td>'.$_POST['fm-37'].'</td>
                    </tr>
                    <tr>
                        <td>Medidores</td>
                        <td>'.$_POST['fm-38'].'</td>
                    </tr>
            
                    <tr>
                        <td>Calha (Parshal/Palmer)</td>
                        <td>'.$_POST['fm-39'].'</td>
                    </tr>
            
                    <tr>
                        <td>Ultrassônicos</td>
                        <td>'.$_POST['fm-40'].'</td>
                    </tr>
            
                    <tr>
                        <td>Eletromagnéticos</td>
                        <td>'.$_POST['fm-41'].'</td>
                    </tr>
                    <tr>
                        <td>Bombas</td>
                        <td>'.$_POST['fm-42'].'</td>
                    </tr>
            
                    <tr>
                        <td>Sensores de Qualidade</td>
                        <td>'.$_POST['fm-43'].'</td>
                    </tr>
            
                    <tr>
                        <td>Dosadores</td>
                        <td>'.$_POST['fm-44'].'</td>
                    </tr>
            
                    <tr>
                        <td colspan="2" style="background:#c7d2ff;"><strong>Despesa operacional</strong></td>
                    </tr>
            
                    <tr>
                        <td>Energia Elétrica (KWs)</td>
                        <td>'.$_POST['fm-45'].'</td>
                    </tr>
            
                    <tr>
                        <td>Energia Elétrica (R$)</td>
                        <td>'.$_POST['fm-46'].'</td>
                    </tr>
            
                    <tr>
                        <td>Pessoal (Número de Funcionários)</td>
                        <td>'.$_POST['fm-47'].'</td>
                    </tr>
            
                    <tr>
                        <td>Pessoal/ Mês (R$)</td>
                        <td>'.$_POST['fm-48'].'</td>
                    </tr>
            
            
                    <tr>
                        <td>Produtos Químicos (R$)</td>
                        <td>'.$_POST['fm-49'].'</td>
                    </tr>
            
            
            
                </table>';


$envio = mail("maycon.douglasn@gmail.com, contato@ecometria.eco.br", 'Contato do site: unicomsi.com.br', $message, $headers);

if($envio)
    //echo "success|Obrigado, em breve entraremos em contato.";
    echo "1";
else
    echo "0";

