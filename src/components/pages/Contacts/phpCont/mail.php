<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$secondname = $_POST['user_secondName'];
$email = $_POST['user_email'];
$reason = $_POST['user_reason']; 
$message = $_POST['user_message'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'artemdevopsmessage@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '$dk820&123'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('artemdevopsmessage@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('a_surzhko@bk.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = ' Заявка с тестового сайта ';
$mail->Body    = 'Добрый день!' '<br> Меня интересует: ' .$reason. '<br>' .$message.  '<br> С уваженим!' '<br>' .$secondname. .$name . '<br>'  .$email;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>