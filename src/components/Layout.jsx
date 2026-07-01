import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="site-wrapper">
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
