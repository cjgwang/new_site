export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>site 07 · est. {year} · record maintained by C. Ge-Wang</p>
    </footer>
  )
}
