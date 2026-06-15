import { useState, useEffect, useRef } from "react"
import ModeSelector from "./components/ModeSelector"
import Timer from "./components/Timer"
import Controls from "./components/Controls"
import SessionDots from "./components/SessionDots"
import "./App.css"

const MODES = {
  focus:  { label: "Foco",        minutes: 25 },
  short:  { label: "Pausa curta", minutes: 5  },
  long:   { label: "Pausa longa", minutes: 15 },
}

export default function App() {
  const [mode, setMode]           = useState("focus")
  const [secondsLeft, setSeconds] = useState(MODES.focus.minutes * 60)
  const [running, setRunning]     = useState(false)
  const [sessions, setSessions]   = useState(0)

  const intervalRef = useRef(null)

  function handleSetMode(newMode) {
    clearInterval(intervalRef.current)
    setRunning(false)
    setMode(newMode)
    setSeconds(MODES[newMode].minutes * 60)
  }

  function handleToggle() {
    setRunning(prev => !prev)
  }

  function handleReset() {
    clearInterval(intervalRef.current)
    setRunning(false)
    setSeconds(MODES[mode].minutes * 60)
  }

  useEffect(() => {
    if (!running) {
      clearInterval(intervalRef.current)
      return
    }

    intervalRef.current = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current)
          setRunning(false)
          if (mode === "focus") setSessions(s => (s + 1) % 5)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [running, mode])

  const totalSeconds = MODES[mode].minutes * 60
  const progress     = secondsLeft / totalSeconds

  return (
    <div className="app">
      <h1 className="app-title">Pomodoro</h1>
      <ModeSelector mode={mode} modes={MODES} onSelect={handleSetMode} />
      <Timer secondsLeft={secondsLeft} progress={progress} label={MODES[mode].label} />
      <SessionDots sessions={sessions} />
      <Controls running={running} onToggle={handleToggle} onReset={handleReset} />
    </div>
  )
}