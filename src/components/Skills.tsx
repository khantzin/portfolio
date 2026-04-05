import { portfolioData } from '../data/portfolio'
import '../styles/Skills.css'

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming</h3>
            <div className="skill-tags">
              {portfolioData.skills.programming.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Frameworks</h3>
            <div className="skill-tags">
              {portfolioData.skills.frameworks.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Cloud & DevOps</h3>
            <div className="skill-tags">
              {portfolioData.skills.cloud.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Databases</h3>
            <div className="skill-tags">
              {portfolioData.skills.databases.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skill-tags">
              {portfolioData.skills.tools.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Architecture</h3>
            <div className="skill-tags">
              {portfolioData.skills.architecture.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
