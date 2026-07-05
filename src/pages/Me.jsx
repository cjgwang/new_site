export default function Me() {
  return (
    <div className="page room-me">
      <div className="page-header">
        <span className="page-eyebrow">file 01 — specimen record</span>
        <h1 className="page-title">me</h1>
        <p className="page-subtitle">who I am</p>
      </div>

      <div className="specimen-frame">
        <div className="specimen-glass" aria-hidden="true" />
        <div className="specimen-meta">
          <div className="specimen-field">
            <span className="specimen-field-key">status</span>
            <span className="specimen-field-val">active, still forming</span>
          </div>
          <div className="specimen-field">
            <span className="specimen-field-key">classification</span>
            <span className="specimen-field-val">researcher / builder</span>
          </div>
          <div className="specimen-field">
            <span className="specimen-field-key">clearance</span>
            <span className="specimen-field-val">public</span>
          </div>
        </div>
      </div>

      <div className="page-body">
        <p>
          Hi! I'm Cath. I'm an AI safety researcher and maths student from Hong Kong. My primary research interests lie in AI control and agent foundations, particularly understanding and mitigating emergent misalignment risks in autonomous AI systems. I focus on empirical questions around goal misgeneralisation, alignment faking, and attack selection in agentic evaluations, aiming to clarify failure modes in frontier models. I am also interested in how these technical insights inform AI governance and policy, especially hardware verification, mechanisms for strategic risk, and constraining dangerous capability deployment.
        </p>
        <p>
          I’m usually based in Oxford, Hong Kong, or Shanghai. I’ve signed the Giving What We Can 10% Pledge and my goal in life is to do the most good I can. I consider the principle of equality and empathy to be some of my core beliefs.
        </p>
      </div>
    </div>
  )
}
