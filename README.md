- installed packages

\*npm i bootstrap react-bootstrap
npm install react-icons

- react-router-dom
  data
  https://fakestoreapi.com/products
  https://www.npmjs.com/package/react-rating-stars-component
  -npm i react-rating-stars-component
  mport ReactStars from "react-rating-stars-component";

* <ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  activeColor="#ffd700"

- https://dashboard.emailjs.com/admin/integration
  I create a connection to my email and create new template
  EmailJS>doc>React==> There is a ready code
  https://www.emailjs.com/docs/examples/reactjs/
  return (
  <form ref={form} onSubmit={sendEmail}>
  <label>Name</label>
  <input type="text" name="user_name" />
  <label>Email</label>
  <input type="email" name="user_email" />
  <label>Message</label>
  <textarea name="message" />
  <input type="submit" value="Send" />
  </form>
  );
  };
  name shold be same with the template from email.js
  Hello {{user_name}},

You got a new message from {{from_name}}:
Your email is {{user_email}}

{{message}}

Best wishes,
Adem team

npm install emailjs-com
For login
react-google-button
https://www.npmjs.com/package/react-google-button



# For deployment
npm i firebase


