import { Flame } from 'lucide-react';

const Card = ({displayName, description, img, id, roastText}) => {
  return (
    <div className="w-full max-w-md bg-stone-950 rounded-2xl border border-white/10 shadow-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">

      {/* Rarity strip — the signature move: grade the roast like a trading-card pull */}
      <div className="flex items-center justify-center gap-2 py-2.5 bg-stone-900 border-b border-white/10">
        <span className="text-xs font-mono font-semibold text-slate-400 tracking-widest uppercase">
          Moment of truth
        </span>
      </div>

      <div className="p-7">

        {/* Identity */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative shrink-0">
            <img
              src={img}
              alt="PlayerName123 avatar"
              className="w-16 h-16 rounded-md object-cover border border-white/10 bg-stone-900"
            />
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-slate-400" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-slate-400" />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-lg font-bold text-stone-100 tracking-tight truncate">
              {displayName}
            </h1>
            <p className="text-xs font-mono text-stone-500 mt-1 tracking-wide">
              UID-{id} · JOINED 2019
            </p>
          </div>
        </div>

        {/* Bio — their own words, quoted and quiet */}
        <div className="mb-6 pl-4 border-l-2 border-white/10">
          <p className="text-sm text-stone-400 italic leading-relaxed">
            {description}
          </p>
        </div>

        
        {/* Verdict — the one loud moment on the card */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Flame className="w-4 h-4 text-slate-400" strokeWidth={2.5} />
            <span className="text-xs font-mono font-semibold text-slate-400 tracking-widest uppercase">
              Verdict
            </span>
          </div>
          <p className="text-base text-stone-100 font-semibold leading-snug">
                {roastText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;