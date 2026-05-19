export const PLAYER_X = 'X';
export const PLAYER_O = 'O';

export const GAME_STATUS = Object.freeze({
  PLAYING: 'playing',
  WON: 'won',
  DRAW: 'draw',
});

export const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const createEmptyBoard = () => Array(9).fill(null);

export const getWinningLine = (board) => {
  for (const line of WINNING_LINES) {
    const [first, second, third] = line;
    const mark = board[first];

    if (mark && mark === board[second] && mark === board[third]) {
      return line;
    }
  }

  return null;
};

export const isBoardFull = (board) => board.every((cell) => cell !== null);

export const getGameOutcome = (board) => {
  const winningLine = getWinningLine(board);

  if (winningLine) {
    return {
      status: GAME_STATUS.WON,
      winner: board[winningLine[0]],
      winningLine,
    };
  }

  if (isBoardFull(board)) {
    return {
      status: GAME_STATUS.DRAW,
      winner: null,
      winningLine: [],
    };
  }

  return {
    status: GAME_STATUS.PLAYING,
    winner: null,
    winningLine: [],
  };
};

export const getNextPlayer = (player) => (player === PLAYER_X ? PLAYER_O : PLAYER_X);