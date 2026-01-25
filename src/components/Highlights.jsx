export default function Highlights() {
  return (
    <div className="highlights">

      {/* TAGS */}
      <div className="tags">
        <span>AI Enthusiast</span>
        <span>Machine Learning</span>
        <span>Problem Solving</span>
        <span>Web Developer</span>
        <span>React Developer</span>
      </div>

      {/* INFO CARDS */}
      <div className="info-cards">
        <div className="info-card">
          <h4>📍 Location</h4>
          <p>Ghaziabad, Uttar Pradesh, India</p>
        </div>

        <div className="info-card">
          <h4>💼 Expertise</h4>
          <p>AI, Web Development, Problem Solving</p>
        </div>

        <div className="info-card">
          <h4>📧 Contact</h4>
          <p>iankitgupta04@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
