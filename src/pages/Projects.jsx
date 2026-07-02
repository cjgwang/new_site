export default function Projects() {
  return (
    <div className="page room-projects">
      <div className="page-header">
        <span className="page-eyebrow">file 04 — workshop</span>
        <h1 className="page-title">projects</h1>
        <p className="page-subtitle">things I have built</p>
      </div>

      <div className="page-body">
        <p>
          A collection of experiments, tools, and creative work.
          Some finished, some perpetually in progress.
        </p>
      </div>

      <div className="bench-grid">
        <div className="bench-slot">bench 01</div>
        <div className="bench-slot">bench 02</div>
        <div className="bench-slot">bench 03</div>
      </div>

      <div className="record" data-label="incomplete">
        Projects will appear here.
      </div>
    </div>
  )
}
