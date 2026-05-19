import Cell from './Cell';

function renderCell(value, index, winningLine, isGameOver, onCellClick) {
  const isWinning = winningLine.includes(index);
  const isDisabled = isGameOver || Boolean(value);

  return (
    <Cell
      key={index}
      index={index}
      value={value}
      isWinning={isWinning}
      isDisabled={isDisabled}
      onClick={onCellClick}
    />
  );
}

export default function Board({ board, winningLine, isGameOver, onCellClick }) {
  const cells = board.map((value, index) => renderCell(value, index, winningLine, isGameOver, onCellClick));

  return <div className="grid w-full max-w-[22rem] grid-cols-3 gap-3">{cells}</div>;
}