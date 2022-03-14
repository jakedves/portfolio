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
    </div>
  );
}
