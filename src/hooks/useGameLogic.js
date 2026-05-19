import { useCallback, useState } from 'react';
import {
  createEmptyBoard,
  GAME_STATUS,
  getGameOutcome,
  getNextPlayer,
  PLAYER_X,
} from '../utils/gameHelpers';

const initialState = {
  board: createEmptyBoard(),
  currentPlayer: PLAYER_X,
  gameStatus: GAME_STATUS.PLAYING,
  winner: null,
  winningLine: [],
};

export default function useGameLogic() {
  const [board, setBoard] = useState(initialState.board);
  const [currentPlayer, setCurrentPlayer] = useState(initialState.currentPlayer);
  const [gameStatus, setGameStatus] = useState(initialState.gameStatus);
  const [winner, setWinner] = useState(initialState.winner);
  const [winningLine, setWinningLine] = useState(initialState.winningLine);

  const resetGame = useCallback(() => {
    setBoard(createEmptyBoard());
    setCurrentPlayer(PLAYER_X);
    setGameStatus(GAME_STATUS.PLAYING);
    setWinner(null);
    setWinningLine([]);
  }, []);

  const handleCellClick = useCallback(
    (index) => {
      if (gameStatus !== GAME_STATUS.PLAYING || board[index]) {
        return;
      }

      const nextBoard = [...board];
      nextBoard[index] = currentPlayer;

      const outcome = getGameOutcome(nextBoard);

      setBoard(nextBoard);
      setGameStatus(outcome.status);
      setWinner(outcome.winner);
      setWinningLine(outcome.winningLine);

      if (outcome.status === GAME_STATUS.PLAYING) {
        setCurrentPlayer(getNextPlayer(currentPlayer));
      }
    },
    [board, currentPlayer, gameStatus],
  );

  return {
    board,
    currentPlayer,
    gameStatus,
    winner,
    winningLine,
    handleCellClick,
    resetGame,
  };
}