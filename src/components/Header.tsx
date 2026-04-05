import '../styles/Header.css'

export default function Header() {
  const downloadCV = () => {
    // Create a simple text-based CV for download
    const cvContent = `KHANT ZIN WIN
Senior Java Developer

Phone: +84 356387412
Email: kaolin295@gmail.com
LinkedIn: https://linkedin.com/in/khant-zin-win

PROFESSIONAL SUMMARY
Senior Backend Engineer with 9+ years of experience building enterprise-grade Java applications across aviation, finance, and ERP domains.

SKILLS
Programming: Java, SQL, TypeScript, JavaScript
Frameworks: Spring Boot, Spring Cloud, Angular
Cloud & DevOps: AWS (S3, SNS, SQS), Docker, Jenkins, OpenShift
Databases: MySQL, PostgreSQL, MSSQL Server
Tools: Git, Bitbucket, GitLab, SonarQube, Splunk
Architecture: Microservices, REST APIs, Distributed Systems`
    
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cvContent))
    element.setAttribute('download', 'KhantZinWin_CV.txt')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
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
