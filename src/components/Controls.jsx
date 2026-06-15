export default function Controls({ running, onToggle, onReset }) {
  return (
    <div className="controls">
      <button className="btn-icon" onClick={onReset} title="Reiniciar">↺</button>
      <button className="btn-main" onClick={onToggle}>
        {running ? "Pausar" : "Iniciar"}
      </button>
    </div>
  )
}