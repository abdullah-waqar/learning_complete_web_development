const Button = ({ text, onClick }) => {
  return (
    <div className="relative inline-block group">
      <div className="absolute inset-0 rounded-lg bg-slate-400 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
      <button
        onClick={onClick}
        className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-300 text-stone-950 font-mono font-bold text-sm uppercase tracking-widest shadow-lg shadow-black/40 transition-all duration-200 hover:bg-slate-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
      >
        {text}
      </button>
    </div>
  )
}

export default Button