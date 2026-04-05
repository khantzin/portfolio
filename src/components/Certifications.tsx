import { portfolioData } from '../data/portfolio'
import '../styles/Certifications.css'

export default function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <h2>Certifications & Training</h2>
        <div className="certifications-list">
          {portfolioData.certifications.map((cert) => (
            <div key={cert.id} className="certification-item">
              <div className="cert-icon">
                <span>📜</span>
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-year">{cert.year}</p>
              </div>
              <div className="cert-action">
                <a href={cert.credentialUrl} className="cert-link">View →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
