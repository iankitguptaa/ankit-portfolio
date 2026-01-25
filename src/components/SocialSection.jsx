import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

export default function SocialSection() {
  return (
    <div className="social-section">

      {/* LEFT SIDE */}
      <div className="social-box">
        <h3>Connect with me</h3>
        <div className="social-icons">

          <a href="https://www.linkedin.com/in/ankit-kumar-gupta04/" target="_blank">
            <FaLinkedinIn />
          </a>

          <a href="mailto:iankitgupta04@gmail.com">
            <MdEmail />
          </a>

          <a href="https://www.instagram.com/theankitguptaa?igsh=MW9hODI5OXpydDFtag==" target="_blank">
            <FaInstagram />
          </a>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="social-box">
        <h3>See what I'm doing</h3>
        <div className="social-icons">

          <a href="https://github.com/iankitguptaa" target="_blank">
            <FaGithub />
          </a>

          <a href="https://leetcode.com/u/theankitguptaa/" target="_blank">
            <SiLeetcode />
          </a>

        </div>
      </div>

    </div>
  );
}
