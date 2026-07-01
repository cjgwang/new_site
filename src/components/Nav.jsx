import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/me', label: 'me' },
  { to: '/research', label: 'research' },
  { to: '/learning', label: 'learning' },
  { to: '/projects', label: 'projects' },
  { to: '/blog', label: 'blog' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
        Cathy Wang
      </Link>

      <ul className={`nav-links${open ? ' open' : ''}`}>
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        onClick={() => setOpen(o => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
