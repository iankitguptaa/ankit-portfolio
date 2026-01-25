import { FaUniversity, FaGraduationCap, FaSchool } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about-section">

      {/* HEADER */}
      <div className="about-header">
        <h2>About Me</h2>
      </div>

      {/* ABOUT TEXT */}
      <div className="about-card">
        <p>
          Hi, I'm <b>Ankit Kumar</b> — an aspiring <b>Software Developer</b> and
          <b> Web Enthusiast</b> who loves turning ideas into practical
          applications. I’m deeply fascinated by how software and modern
          technologies can shape the future of businesses and everyday life.
        </p>

        <p>
          Beyond coding, I enjoy exploring design, experimenting with UI/UX,
          and blending <b>creative thinking</b> with <b>technical precision</b>.
          My goal is to build solutions that not only perform — but also inspire.
        </p>

        <p>
          MCA student with hands-on experience in full-stack development and
          programming projects. Proficient in Java, Python, React, databases,
          and problem solving. Seeking opportunities to grow as a professional
          developer and contribute to impactful software solutions.
        </p>
      </div>

      {/* EDUCATION */}
      <div className="about-education">
        <h2>Education</h2>

        {/* MCA */}
        <div className="edu-card">
          <div className="edu-icon"><FaUniversity /></div>
          <div className="edu-content">
            <h3>MCA — Deemed to be University</h3>
            <p>Ghaziabad, Uttar Pradesh</p>
            <p>2025 – 2027</p>
          </div>
        </div>

        {/* BACHELOR */}
        <div className="edu-card">
          <div className="edu-icon"><FaGraduationCap /></div>
          <div className="edu-content">
            <h3>BCA - Institute of Technology & Science</h3>
            <p>Ghaziabad, Uttar Pradesh</p>
            <p>2021 – 2024</p>
          </div>
        </div>

        {/* 12TH */}
        <div className="edu-card">
          <div className="edu-icon"><FaSchool /></div>
          <div className="edu-content">
            <h3>Higher Secondary (12th)</h3>
            <p>Dehradun Public School - Ghaziabad</p>
            <p>Completed 2021</p>
          </div>
        </div>

      </div>

    </section>
  );
}
