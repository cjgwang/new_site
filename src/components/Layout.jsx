import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

const motes = [
  { left: '8%', delay: '0s', duration: '22s' },
  { left: '22%', delay: '4s', duration: '26s' },
  { left: '41%', delay: '9s', duration: '20s' },
  { left: '63%', delay: '2s', duration: '30s' },
  { left: '78%', delay: '13s', duration: '24s' },
  { left: '90%', delay: '7s', duration: '28s' },
]

export default function Layout() {
  return (
    <div className="site-wrapper">
      <div className="atmosphere" aria-hidden="true">
        <div className="atmo-motes">
          {motes.map((m, i) => (
            <span
              key={i}
              className="mote"
              style={{ left: m.left, animationDelay: m.delay, animationDuration: m.duration }}
            />
          ))}
        </div>
        <div className="atmo-scan" />
        <div className="atmo-grain" />
        <div className="atmo-vignette" />
      </div>

      <Nav />
      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
