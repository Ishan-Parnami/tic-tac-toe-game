export default function Cell({ value, isWinning, isDisabled, onClick, index }) {
  const handleClick = () => onClick(index);
  const baseClasses =
    'flex aspect-square items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/70 text-3xl font-semibold shadow-soft transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';
  const stateClasses = isWinning
    ? 'border-emerald-400/70 bg-emerald-400/15 text-emerald-300 shadow-[0_0_0_1px_rgba(52,211,153,0.25)]'
    : value === 'X'
      ? 'text-sky-300'
      : 'text-fuchsia-300';
  const interactionClasses = isDisabled
    ? 'cursor-not-allowed opacity-80'
    : 'hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800/90 hover:shadow-lg active:scale-95';
  const ariaLabel = value ? `Cell ${index + 1}, ${value}` : `Cell ${index + 1}, empty`;

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={`${baseClasses} ${stateClasses} ${interactionClasses}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">{value}</span>
    </button>
  );
}