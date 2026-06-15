# 🍅 Pomodoro Timer

Aplicação de produtividade baseada na técnica Pomodoro, desenvolvida com React e Vite.

🔗 **[Ver projeto ao vivo](https://pomodoro-temporizador.vercel.app)**

---

## 📸 Preview

![Pomodoro Timer](https://pomodoro-temporizador.vercel.app/og-image.png)

> _Interface minimalista com timer circular animado, seletor de modos e contador de sessões._

---

## ✨ Funcionalidades

- ⏱ Timer com contagem regressiva em tempo real
- 🔄 3 modos: **Foco** (25min), **Pausa curta** (5min) e **Pausa longa** (15min)
- ⭕ Círculo SVG animado que acompanha o progresso
- 🔵 Contador de sessões concluídas (até 4 por ciclo)
- ▶ Botões de iniciar, pausar e reiniciar
- 📱 Layout responsivo

---

## 🛠 Tecnologias

- [React 18](https://react.dev/) — biblioteca de UI
- [Vite](https://vitejs.dev/) — bundler e dev server
- CSS puro — estilização sem dependências externas

---

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/Iannn10/pomodoro-temporizador.git

# Entre na pasta
cd pomodoro-temporizador

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

Acesse em `http://localhost:5173`

---

## 📁 Estrutura do projeto

```
src/
├── App.jsx               # Componente raiz e estado global
├── App.css               # Estilos globais
└── components/
    ├── Timer.jsx         # Círculo SVG animado + display do tempo
    ├── ModeSelector.jsx  # Abas de seleção de modo
    ├── Controls.jsx      # Botões iniciar/pausar/reiniciar
    └── SessionDots.jsx   # Indicador de sessões concluídas
```

---

## 💡 O que aprendi

- Gerenciamento de estado com `useState` e `useRef`
- Efeitos colaterais com `useEffect` e cleanup de intervalos
- Animação de SVG com `strokeDasharray` e `strokeDashoffset`
- Componentização e passagem de props no React
- Deploy de aplicação React na Vercel

---

## 📄 Licença

MIT — fique à vontade para usar e modificar.
