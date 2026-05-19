# Tic Tac Toe Game

A modern, responsive Tic Tac Toe game built with React, Vite, Bun, and Tailwind CSS. The UI uses a clean dark theme with clear turn feedback, win highlighting, and accessible controls.

## Features

- 3×3 interactive board
- Alternating X and O turns
- Win detection across rows, columns, and diagonals
- Draw detection when the board is full
- Reset button for a fresh game
- Winning line highlight
- Responsive layout for desktop, tablet, and mobile

## Tech Stack

- React with functional components and hooks
- Vite for development and production builds
- Tailwind CSS for styling
- Bun for package management

## Getting Started

### Install

```bash
# Clone the repository
git clone https://github.com/Ishan-Parnami/tic-tac-toe-game.git

# Navigate to project directory
cd tic-tac-toe-game

# Install dependencies
bun install
```

### Run locally

```bash
bun run dev
```

### Build for production

```bash
bun run build
```

### Preview the production build

```bash
bun run preview
```

## Deploying

This project is ready to deploy on Vercel or Netlify as a standard Vite app. Use the build command above and publish the generated `dist` directory.

## Project Structure

```text
src/
├── components/
│   ├── Board.jsx
│   ├── Cell.jsx
│   ├── GameStatus.jsx
│   └── ResetButton.jsx
├── hooks/
│   └── useGameLogic.js
├── utils/
│   └── gameHelpers.js
├── App.jsx
├── index.css
└── main.jsx
```

## 🎯 How to Play

1. Player X goes first
2. Click any empty cell to place your mark
3. Players alternate turns
4. First to get three in a row wins (horizontal, vertical, or diagonal)
5. If all cells are filled with no winner, it's a draw
6. Click "Reset Game" to play again

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ishan Parnami**

- GitHub: [@](https://github.com/Ishan-Parnami)
- Twitter: [@](https://x.com/ishanp214)

---

⭐ Star this repo if you like the project!