export default function Projects() {
  return (
    <section id="projects" className="projects-section">

      {/* HEADING */}
      <div className="projects-header">
        <h2>🚀 Projects</h2>
        <p>A collection of my major works — blending development and innovation.</p>
      </div>

      {/* PROJECT GRID */}
      <div className="projects-grid">

        {/* PROJECT 1 */}
        <div className="project-card">
          <img src="/project1.jpg" alt="Lung Cancer Prediction" />

          <h3>Lung Cancer Prediction</h3>
          <p>
            Logistic Regression based ML model to predict lung cancer with 90%+
            accuracy using Python and scikit-learn.
          </p>

          <div className="tech-tags">
            <span>Python</span>
            <span>scikit-learn</span>
            <span>NumPy</span>
            <span>Pandas</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/iankitguptaa/Lung-Cancer-prediction-project" className="btn-code">Code</a>
            <a href="#" className="btn-live">Live</a>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="project-card">
          <img src="/project2.jpeg" alt="E-Commerce Website" />

          <h3>E-Commerce Website</h3>
          <p>
            Full responsive React e-commerce app with cart, product listing,
            hooks, and deployed on Vercel.
          </p>

          <div className="tech-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>Vercel</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/iankitguptaa/ECOMMERCE-REACT" className="btn-code">Code</a>
            <a href="https://ecommerce-react-ten-puce.vercel.app/" className="btn-live">Live</a>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="project-card">
          <img src="/project3.png" alt="Digital Portfolio Platform" />

          <h3>Digital Portfolio Platform</h3>
          <p>
            React based digital portfolio platform to showcase student projects,
            skills and achievements dynamically.
          </p>

          <div className="tech-tags">
            <span>React</span>
            <span>Hooks</span>
            <span>CSS</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/iankitguptaa/Student-Portfolio-Website-React" className="btn-code">Code</a>
            <a href="https://student-portfolio-website-react.vercel.app/" className="btn-live">Live</a>
          </div>
        </div>

        {/* PROJECT 4 */}
        <div className="project-card">
          <img src="/project4.png" alt="Portfolio Website" />

          <h3>Portfolio Website</h3>
          <p>
            Modern animated portfolio using React, Framer Motion and glowing UI
            to showcase my profile and work.
          </p>

          <div className="tech-tags">
            <span>React</span>
            <span>Framer Motion</span>
            <span>CSS</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/iankitguptaa/ankit-portfolio" className="btn-code">Code</a>
            <a href="https://ankit-portfolio-three-woad.vercel.app/" className="btn-live">Live</a>
          </div>
        </div>

        {/* PROJECT 5 */}
        <div className="project-card">
          <img src="/Project5.png" alt="E-Commerce Website" />

          <h3>Restaurant Website</h3>
          <p>
            I recently challenged myself to build a complete, production-ready food delivery platform from scratch. I wanted to go beyond just a simple frontend mockup and build something that looks stunning, feels interactive, and is powered by a real backend.
          </p>

          <div className="tech-tags">
            <span>React</span>
            <span>Express</span>
            <span>REST API</span>
            <span>Vercel</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/iankitguptaa/Restaurant-Website" className="btn-code">Code</a>
            <a href="https://restaurant-website-steel-omega.vercel.app/" className="btn-live">Live</a>
          </div>
        </div>


      </div>
    </section>
  );
}
