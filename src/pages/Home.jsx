import { Link } from 'react-router-dom'

const sections = [
  { to: '/me', code: '01', label: 'me', desc: 'who I am and what I care about' },
  { to: '/research', code: '02', label: 'research', desc: 'academic work and investigations' },
  { to: '/learning', code: '03', label: 'learning', desc: 'notes, reading logs, ideas in progress' },
  { to: '/projects', code: '04', label: 'projects', desc: 'things I have built' },
  { to: '/blog', code: '05', label: 'blog', desc: 'occasional writing' },
]

export default function Home() {
  return (
    <div className="page room-home">
      <div className="home-intro">
        <span className="home-eyebrow">entry · site 07</span>
        <h1 className="home-name">Cath Ge-Wang</h1>
        <p className="home-tagline">maths student · AI safety researcher</p>
        <p className="home-desc">
          I'm a Mathematics student at the University of Oxford. I do technical research in AI alignment and AI control, and I work on technical governance at the Machine Research Intelligence Institute. 
        </p>
      </div>

      <span className="directory-index-label">facility directory</span>
      <nav className="section-links" aria-label="Site sections">
        {sections.map(({ to, code, label, desc }) => (
          <Link key={to} to={to} className="section-link">
            <span className="section-link-code">{code}</span>
            <span className="section-link-name">{label}</span>
            <span className="section-link-desc">{desc}</span>
            <span className="section-link-arrow">↗</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
