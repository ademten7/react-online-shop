import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
        <br />

        <label>Email:</label>
        <input type="email" name="email" />
        <br />
        <label htmlFor="textarea">Message:</label>
        <textarea name="message" id="textarea" cols="30" rows="10"></textarea>
      </form>
    </div>
  );
};

export default Contact;
