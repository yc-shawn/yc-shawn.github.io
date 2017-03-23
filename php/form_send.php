

<?php
  $form = "noreply@example.com";
  $emal = "ychen248@buffalo.edu";
  $name = $_POST['name']; // required
  $replyto = $_POST['replyto']; // required
  $message = $_POST['message']; // required

  mail($emal, $name, $replyto, $message, "From:".$form);

  Print "success";

 ?>
