import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h1>Contact Us</h1>
      <form action="">
        <input type="text" name="" id="" placeholder="Full Name" required />
        <input
          type="email"
          name=""
          id=""
          placeholder="Type your Email"
          required
        />
        <textarea name="message" placeholder="Write Here........"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
