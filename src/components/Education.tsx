import { portfolioData } from '../data/portfolio'
import '../styles/Education.css'

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-items">
          {portfolioData.education.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="education-icon">
                <span>🎓</span>
              </div>
              <div className="education-content">
                <h3>{edu.degree} in {edu.field}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="year">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
