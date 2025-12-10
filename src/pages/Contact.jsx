import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact fade-in">
      <h2>Contact</h2>
      <form className="contact-form slide-up">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="5"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
