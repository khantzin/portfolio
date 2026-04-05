import { portfolioData } from '../data/portfolio'
import '../styles/About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text-section">
            <p className="about-text">{portfolioData.summary}</p>
            <div className="about-details">
              <p>🎯 <strong>Specialization:</strong> Enterprise Java Development, Spring Boot Microservices, Cloud Architecture</p>
              <p>🌍 <strong>Experience:</strong> International teams and cross-border collaborations</p>
              <p>💡 <strong>Focus:</strong> Scalable, high-performance backend systems</p>
              <p>🚀 <strong>Innovation:</strong> AI-assisted SDLC workflows and modern development practices</p>
            </div>
          </div>
          <div className="about-highlights">
            <div className="highlight">
              <h3>9+</h3>
              <p>Years of Experience</p>
              <span className="detail">Enterprise-grade development</span>
            </div>
            <div className="highlight">
              <h3>4</h3>
              <p>Major Projects</p>
              <span className="detail">Airline, Finance, Insurance, ERP</span>
            </div>
            <div className="highlight">
              <h3>100+</h3>
              <p>Clients Served</p>
              <span className="detail">Multiple industries</span>
            </div>
            <div className="highlight">
              <h3>3</h3>
              <p>Companies</p>
              <span className="detail">FPT, BlueStone, MIT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
