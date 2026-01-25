export default function Resume() {
  return (
    <section id="resume" className="resume-section">

      {/* HEADER */}
      <div className="resume-header">
        <h2>📄 Resume</h2>
        <p>A quick glance at my journey.</p>
      </div>

      {/* TOP CARD */}
      <div className="resume-top-card">

        {/* LEFT INFO */}
        <div className="resume-left">
          <h1>👨‍💻 ANKIT KUMAR</h1>
          <p>Master of Computer Applications (MCA)</p>
          <p>KIET Group of Institutions, Ghaziabad</p>

          <div className="resume-contact">
            <p>📍 Ghaziabad, Uttar Pradesh</p>
            <p>📧 iankitgupta04@gmail.com</p>
            <p>📞 +91 9990285721</p>
          </div>
        </div>

        {/* RIGHT SUMMARY */}
        <div className="resume-summary">
          <h3>Professional Summary:</h3>
          <p>
            MCA student with strong foundation in software development, web technologies,
            and machine learning. Skilled in Java, Python, React, and databases.
            Passionate about building impactful software systems and seeking opportunities
            to grow as a Software developer.
          </p>
        </div>

      </div>

      {/* EDUCATION */}
      <div className="resume-education">
        <h2>🎓 Education</h2>

        <div className="edu-item">
          <h3>MCA — KIET Deemed to be University (2025–2027)</h3>
          <p>Specialization: Computer Applications</p>
        </div>

        <div className="edu-item">
          <h3>BCA - Institute of Technology & Science (2021–2024)</h3>
          <p>Specialization: Computer Applications</p>
        </div>

        <div className="edu-item">
          <h3>12th Boards - Dehradun Public School (2021)</h3>
        </div>
      </div>

      {/* PDF VIEWER */}
      <div className="resume-viewer">
        <iframe
          src="/ANKIT_MCA_RESUME.pdf"
          title="Resume PDF"
          frameBorder="0"
        ></iframe>
      </div>

      {/* DOWNLOAD BUTTON */}
      <div className="resume-download">
        <a href="/ANKIT_MCA_RESUME.pdf" download className="btn-download">
          ⬇ Download Resume
        </a>
      </div>

    </section>
  );
}
