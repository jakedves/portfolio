/**
 * This component will be used to provide people with a way to contact me,
 * so they can ask me questions, or ask to see some of my other work.
 * @returns : The contact form
 */
export default function Contact() {
  return (
    <div>
      <form>
        <input type="text" id="name" name="name" placeholder="Name"></input>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
        ></input>
        <textarea id="subject" name="subject" placeholder="Message"></textarea>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
