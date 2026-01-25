export default function Certificates() {
  return (
    <section id="certificates" className="certificates-section">

      {/* HEADER */}
      <div className="certificates-header">
        <h2>🏅 Certificates</h2>
        <p>Explore my certifications</p>
      </div>

      {/* GRID */}
      <div className="certificates-grid">

        {/* CARD 1 */}
        <div className="certificate-card">
          <img src="/cert1.jpeg" alt="Flipkart Hackathon" />
          <h3>Ethical Considerations fr Generative AI - IBM</h3>
          <a href="/cert1.jpeg" target="_blank" className="btn-view">View</a>
        </div>

        {/* CARD 2 */}
        <div className="certificate-card">
          <img src="/cert2.jpeg" alt="Solution Challenge" />
          <h3>Python for Data Science - IBM</h3>
          <a href="/cert2.jpeg" target="_blank" className="btn-view">View</a>
        </div>

        {/* CARD 3 */}
        <div className="certificate-card">
          <img src="/cert3.jpeg" alt="ADira" />
          <h3>Responsive Web Design - freeCodeCamp</h3>
          <a href="/cert3.jpeg" target="_blank" className="btn-view">View</a>
        </div>

        {/* CARD 4 */}
        <div className="certificate-card">
          <img src="/cert4.jpeg" alt="ADira" />
          <h3>TCS iON Career Edge - TCS</h3>
          <a href="/cert4.jpeg" target="_blank" className="btn-view">View</a>
        </div>

        {/* CARD 5 */}
        <div className="certificate-card">
          <img src="/cert5.jpeg" alt="ADira" />
          <h3>ChatGPT: Introduction and Application in various domains - Data Trained</h3>
          <a href="/cert5.jpeg" target="_blank" className="btn-view">View</a>
        </div>

      </div>
    </section>
  );
}
