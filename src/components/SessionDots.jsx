export default function SessionDots({ sessions }) {
  return (
    <div className="session-dots">
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} className={`dot ${i < sessions ? "done" : ""}`} />
      ))}
    </div>
  )
}