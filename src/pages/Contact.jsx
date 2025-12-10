import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact fade-in">
      <h2>Contact</h2>
      <form className="contact-form slide-up">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
