import { portfolioData } from '../data/portfolio'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">{portfolioData.name}</h1>
        <p className="hero-subtitle">{portfolioData.title}</p>
        <p className="hero-description">9+ years of enterprise Java development expertise</p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
          <a href="#experience" className="btn btn-secondary">View Experience</a>
        </div>
      </div>
    </section>
  )
}
