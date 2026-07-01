import { Link } from 'react-router-dom'

const sections = [
  { to: '/me',       label: 'me',       desc: 'who I am and what I care about' },
  { to: '/research', label: 'research', desc: 'academic work and investigations' },
  { to: '/learning', label: 'learning', desc: 'notes, reading logs, ideas in progress' },
  { to: '/projects', label: 'projects', desc: 'things I have built' },
  { to: '/blog',     label: 'blog',     desc: 'occasional writing' },
]

export default function Home() {
  return (
    <div className="page">
      <div className="home-intro">
        <h1 className="home-name">Cath Ge-Wang</h1>
        <p className="home-tagline">researcher · builder · curious person</p>
        <p className="home-desc">
          I think carefully about hard problems. This is a small corner of the internet
          where I keep track of what I'm working on, learning, and thinking about.
        </p>
      </div>

      <nav className="section-links" aria-label="Site sections">
        {sections.map(({ to, label, desc }) => (
          <Link key={to} to={to} className="section-link">
            <span className="section-link-name">{label}</span>
            <span className="section-link-desc">{desc}</span>
            <span className="section-link-arrow">↗</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
