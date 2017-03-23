<form name="htmlform" method="post" action="php/form_send.php">
  <div class="contact-info-group">
    <label><span>Your Name</span><input type="text" name="name"></label>
    <label><span>Your Email</span><input type="email" name="email"></label>
  </div>

  <label><span>Message</span><textarea name="message"></textarea></label>
  <div class="submit-warp"><input class="submit" type="submit" value="Send"></div>
</form>
<h1>Elegant Contact Form</h1>
<form class="cf">
  <div class="half left cf">
    <input type="text" id="input-name" placeholder="Name">
    <input type="email" id="input-email" placeholder="Email address">
    <input type="text" id="input-subject" placeholder="Subject">
  </div>
  <div class="half right cf">
    <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
  </div>
  <input type="submit" value="Submit" id="input-submit">
</form>
