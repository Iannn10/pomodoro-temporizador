export default function ModeSelector({ mode, modes, onSelect }) {
  return (
    <div className="mode-selector">
      {Object.entries(modes).map(([key, { label }]) => (
        <button
          key={key}
          className={`mode-btn ${mode === key ? "active" : ""}`}
          onClick={() => onSelect(key)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}