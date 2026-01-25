import { FaGithub, FaLinkedinIn, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">

      {/* HEADER */}
      <div className="contact-header">
        <h2>Let’s Connect & Collaborate 🤝</h2>
        <p>
          Whether it’s a new project, a collaboration, or just to say hi — I’d
          love to hear from you!
        </p>
      </div>

      {/* SOCIAL ICONS */}
      <div className="contact-social">
        <a href="https://github.com/iankitguptaa" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/ankit-kumar-gupta04/" target="_blank"><FaLinkedinIn /></a>
        <a href="mailto:iankitgupta04@gmail.com"><FaEnvelope /></a>
        <a href="https://wa.me/919990285721" target="_blank"><FaWhatsapp /></a>
        <a href="https://www.instagram.com/theankitguptaa?igsh=MW9hODI5OXpydDFtag==" target="_blank"><FaInstagram /></a>
        <a href="https://www.facebook.com/" target="_blank"><FaFacebookF /></a>
      </div>

      {/* FORM */}
      <form className="contact-form">

        <input type="text" placeholder="Your Name" required />
        <input type="text" placeholder="Your Email or Phone" required />
        <input type="text" placeholder="Subject" />

        <textarea rows="5" placeholder="Your Message..." />

        <button type="submit">🚀 Send Message</button>
      </form>

    </section>
  );
}
