import Board from './components/Board';
import GameStatus from './components/GameStatus';
import ResetButton from './components/ResetButton';
import useGameLogic from './hooks/useGameLogic';
import { GAME_STATUS } from './utils/gameHelpers';

export default function App() {
  const { board, currentPlayer, gameStatus, winner, winningLine, handleCellClick, resetGame } = useGameLogic();
  const isGameOver = gameStatus !== GAME_STATUS.PLAYING;

  return (
    <main className="min-h-screen px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-4xl items-center justify-center">
        <div className="w-full max-w-2xl rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-soft backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Tic Tac Toe</h1>
          </div>

          <GameStatus gameStatus={gameStatus} currentPlayer={currentPlayer} winner={winner} />

          <div className="mt-8 flex justify-center">
            <Board
              board={board}
              winningLine={winningLine}
              isGameOver={isGameOver}
              onCellClick={handleCellClick}
            />
          </div>

          <div className="mt-8 flex justify-center">
            <ResetButton onReset={resetGame} />
          </div>

          <p className="mt-8 text-center text-xs text-slate-500 sm:text-sm">
            Click an empty cell to play. X starts first.
          </p>
        </div>
      </div>
    </main>
  );
}