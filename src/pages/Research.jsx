export default function Research() {
  return (
    <div className="page room-research">
      <div className="page-header">
        <span className="page-eyebrow">file 02 — archive room</span>
        <h1 className="page-title">research</h1>
        <p className="page-subtitle">academic work and investigations</p>
      </div>

      <div className="page-body">
        <p>
          My research focuses on [your research area]. I'm interested in
          [specific questions or problems].
        </p>
      </div>

      <div className="archive-shelf">
        <div className="archive-row">
          <span className="archive-row-index">— —</span>
          <span className="archive-row-title">shelf empty, records pending</span>
        </div>
      </div>

      <div className="record" data-label="incomplete">
        Papers, projects, and writing will appear here.
      </div>
    </div>
  )
}
