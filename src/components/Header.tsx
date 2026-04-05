import '../styles/Header.css'

export default function Header() {
  const downloadCV = () => {
    // Download the Word document CV
    const link = document.createElement('a')
    link.href = '/portfolio/Khant_Zin_Win_CV.docx'
    link.download = 'Khant_Zin_Win_CV.docx'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-brand">
          <a href="#home">KZW</a>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="download-btn" onClick={downloadCV}>
          📥 Download CV
        </button>
      </nav>
    </header>
  )
}
