export default function ResetButton({ onReset }) {
  return (
    <button
      type="button"
      onClick={onReset}
      className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      Reset Game
    </button>
  );
}