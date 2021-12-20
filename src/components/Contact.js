/**
 * This component will be used to provide people with a way to contact me,
 * so they can ask me questions, or ask to see some of my other work.
 * @returns : The contact form
 */
export default function Contact() {
  return (
    <div className="contact-form">
      <a className="send-email" href="mailto:jakedves@gmail.com">
        <h4>Send me an email</h4>
      </a>
      {/* <form>
        <input
          className="form-element"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        ></input>
        <input
          className="form-element"
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
        ></input>
        <textarea
          className="form-element"
          id="subject"
          name="subject"
          placeholder="Message"
        ></textarea>
        <a href={href}>
          <input className="form-element" type="submit" value="Send"></input>
        </a>
      </form> */}
    </div>
  );
}
