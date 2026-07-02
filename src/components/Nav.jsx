import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const rooms = [
  { to: '/me', code: '01', label: 'me', designation: 'specimen file' },
  { to: '/research', code: '02', label: 'research', designation: 'archive room' },
  { to: '/learning', code: '03', label: 'learning', designation: 'greenhouse' },
  { to: '/projects', code: '04', label: 'projects', designation: 'workshop' },
  { to: '/blog', code: '05', label: 'blog', designation: 'transmissions' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="directory">
      <div className="directory-plate">
        <Link to="/" className="directory-mark" onClick={() => setOpen(false)}>
          <span className="directory-mark-code">site 07</span>
          <span className="directory-mark-name">Cath Ge-Wang</span>
        </Link>

        <span className="directory-status">
          <span className="status-dot" />
          monitored
        </span>

        <button
          className="directory-toggle"
          aria-label="Toggle directory"
          onClick={() => setOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <ul className={`directory-rooms${open ? ' open' : ''}`}>
        {rooms.map(({ to, code, label, designation }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => `directory-room-link${isActive ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              <span className="room-code">{code}</span>
              <span className="room-labels">
                <span className="room-label">{label}</span>
                <span className="room-designation">{designation}</span>
              </span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="directory-foot">
        <span className="directory-foot-line">access log — entrance unsecured</span>
      </div>
    </nav>
  )
}
