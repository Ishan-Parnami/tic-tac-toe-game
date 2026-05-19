import { GAME_STATUS } from '../utils/gameHelpers';

function getStatusCopy(gameStatus, currentPlayer, winner) {
  if (gameStatus === GAME_STATUS.WON) {
    return {
      heading: `${winner} wins the round`,
      detail: 'Three in a row secured the game.',
    };
  }

  if (gameStatus === GAME_STATUS.DRAW) {
    return {
      heading: 'Game ends in a draw',
      detail: 'All cells are filled with no winner.',
    };
  }

  return {
    heading: `${currentPlayer}'s turn`,
    detail: 'Choose an empty cell to place your mark.',
  };
}

export default function GameStatus({ gameStatus, currentPlayer, winner }) {
  const copy = getStatusCopy(gameStatus, currentPlayer, winner);
  const statusTone = gameStatus === GAME_STATUS.WON ? 'text-emerald-300' : 'text-slate-100';

  return (
    <section className="space-y-2 text-center">
      <p className={`text-2xl font-semibold tracking-tight sm:text-3xl ${statusTone}`}>{copy.heading}</p>
      <p className="text-sm text-slate-400 sm:text-base">{copy.detail}</p>
    </section>
  );
}