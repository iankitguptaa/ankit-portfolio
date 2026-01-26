import { motion } from "framer-motion";
import TypingText from "./TypingText";
import Highlights from "./Highlights";
import SocialSection from "./SocialSection";

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* LEFT IMAGE */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="image-ring">
            <img src="/personalpic.jpeg" alt="Ankit Kumar" />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Hi, I’m <span>Ankit Kumar</span>
          </h1>

          <h3 className="subtitle">
            MCA | Web Developer | Tech Explorer
          </h3>

          <TypingText />

          <Highlights />

          {/* 🔥 SOCIAL ICONS SECTION */}
          <SocialSection />
        </motion.div>

      </div>
    </section>
  );
}
