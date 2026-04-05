import { portfolioData } from '../data/portfolio'
import '../styles/Experience.css'

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="timeline">
          {portfolioData.experience.map((job) => (
            <div key={job.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{job.title}</h3>
                <p className="company">{job.company}</p>
                <p className="period">{job.period}</p>
                <ul className="highlights">
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
