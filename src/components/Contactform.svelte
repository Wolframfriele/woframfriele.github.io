<style>
  #fs-frm-inputs {
  border: none;
  margin: 0;
  padding: 0;
  }

  input[type="email"],
  input[type="text"] {
    width: 100%;
    padding: 12px;
    margin: 12px 0;
    box-sizing: border-box;
    font-size: 1em;
  }

  textarea {
    width: 100%;
    padding: 12px;
    margin: 12px 0;
    font-family: Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    resize: vertical;
    font-size: 1em;
  }

  input[type="submit"] {
    margin: 12px 0;
    padding: 12px;
    background-color: white;
    font-size: 1em;
    width: 50%;
  }

  input[type="submit"]:hover {
    color: white;
    background-color: #1e1e1e;
  }
</style>

<form
  action="https://formspree.io/f/mayayvln"
  method="POST"
  accept-charset="utf-8"
>
  <fieldset id="fs-frm-inputs">
    <label for="name">Full Name</label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="First and Last"
      required=""
    />

    <label for="email">Email</label>
    <input
      type="email"
      id="email-address"
      name="_replyto"
      placeholder="Your email"
      required=""
    />

    <label for="message">Message</label>
    <textarea
      name="message"
      id="message"
      cols="30"
      rows="10"
      placeholder="Your message"
      required=""
    ></textarea>

    <input
      type="hidden"
      name="_subject"
      id="email-subject"
      value="Contact Form Submission"
    />

    <input type="submit" value="Submit" />
  </fieldset>
</form>