import {
  FaReact,
  FaPython,
  FaJava,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiPytorch,
  SiCplusplus,
  SiNumpy,
  SiPandas,
} from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">

      {/* HEADER */}
      <div className="skills-header">
        <h2>✨ My Skills</h2>
        <p>Technical expertise blended with creativity — explore my core competencies below.</p>
      </div>

      {/* ICON CLOUD */}
      <div className="skills-cloud">
        <div className="skill-bubble"><FaReact /><span>React</span></div>
        <div className="skill-bubble"><FaJsSquare /><span>JavaScript</span></div>
        <div className="skill-bubble"><SiMongodb /><span>MongoDB</span></div>
        <div className="skill-bubble"><FaPython /><span>Python</span></div>
        <div className="skill-bubble"><SiCplusplus /><span>C++</span></div>
        <div className="skill-bubble"><FaHtml5 /><span>HTML</span></div>
        <div className="skill-bubble"><FaCss3Alt /><span>CSS</span></div>
        <div className="skill-bubble"><FaJava /><span>Java</span></div>
        <div className="skill-bubble"><FaGitAlt /><span>Git</span></div>
        <div className="skill-bubble"><SiMysql /><span>MySQL</span></div>
        <div className="skill-bubble"><SiNumpy /><span>NumPy</span></div>
        <div className="skill-bubble"><SiPandas /><span>Pandas</span></div>
      </div>

      {/* BOTTOM SKILL CARDS */}
      <div className="skills-grid">

        <div className="skill-card">
          <h3>Programming Languages</h3>
          <ul>
            <li>Python</li>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Web Technologies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Databases & Tools</h3>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Git</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Libraries</h3>
          <ul>
            <li>NumPy</li>
            <li>Pandas</li>
            <li>scikit-learn</li>
            <li>Matplotlib</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Core Concepts</h3>
          <ul>
            <li>Data Structures & Algorithms</li>
            <li>Machine Learning</li>
            <li>OOPS</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Soft Skills</h3>
          <ul>
            <li>Teamwork</li>
            <li>Problem Solving</li>
            <li>Creativity</li>
            <li>Adaptability</li>
            <li>Communication</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
