import { portfolioData } from '../data/portfolio'
import '../styles/Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="contact-intro">Feel free to reach out for collaborations or just a friendly hello</p>
        
        <div className="contact-info">
          <a href={`mailto:${portfolioData.email}`} className="contact-card">
            <h3>📧 Email</h3>
            <p>{portfolioData.email}</p>
          </a>
          
          <a href={`tel:${portfolioData.phone}`} className="contact-card">
            <h3>📞 Phone</h3>
            <p>{portfolioData.phone}</p>
          </a>
          
          <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
            <h3>💼 LinkedIn</h3>
            <p>Visit Profile</p>
          </a>
        </div>
        
        <div className="social-links">
          <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
            in
          </a>
          <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
            ◉
          </a>
        </div>
      </div>
      
      <footer className="footer">
        <p>&copy; 2024 {portfolioData.name}. All rights reserved.</p>
      </footer>
    </section>
  )
}
