const RADIUS = 100
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function fmt(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0")
  const s = String(seconds % 60).padStart(2, "0")
  return `${m}:${s}`
}

export default function Timer({ secondsLeft, progress, label }) {
  const offset = CIRCUMFERENCE * progress

  return (
    <div className="timer-circle">
      <svg width="220" height="220" viewBox="0 0 220 220">
        <circle
          cx="110" cy="110" r={RADIUS}
          fill="none" stroke="#e5e5e5" strokeWidth="4"
        />
        <circle
          cx="110" cy="110" r={RADIUS}
          fill="none" stroke="#111" strokeWidth="4"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "110px 110px",
            transition: "stroke-dashoffset 0.5s ease"
          }}
        />
      </svg>
      <div className="timer-label">
        <span className="timer-time">{fmt(secondsLeft)}</span>
        <span className="timer-mode">{label}</span>
      </div>
    </div>
  )
}