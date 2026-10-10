import { useState } from "react"
import Button from "../Components/Button"
import { useNavigate } from "react-router";

const InputPage = () => {
    let navigate = useNavigate();

   

    const [playerId, setPlayerId] = useState("")

    function handler() 
    {
        if (playerId === "") 
        {
            alert("Please enter your player id first");
        } else 
        {
            navigate(`/player/${playerId}`);
        }
    }
    return (
        <div className="min-h-screen bg-stone-950 flex flex-col items-center justify-center p-4">
            
            {/* Matching card wrapper to keep the design cohesive */}
            <div className="w-full max-w-md bg-stone-900/60 border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col gap-6 backdrop-blur-sm">
                
                {/* Header text matching your trading-card mono style */}
                <div className="text-center">
                    <h1 className="text-lg font-mono font-bold tracking-wider text-stone-100 uppercase">
                        ROBLOX // ROASTER
                    </h1>
                    <p className="text-xs font-mono text-stone-500 mt-1 tracking-wide">
                        ENTER YOUR PLAYER ID
                    </p>
                </div>

                {/* Form Input & Button section */}
                <div className="flex flex-col gap-4">
                    <input 
                        type="text" 
                        value={playerId} 
                        onChange={(e) => setPlayerId(e.target.value)} 
                        placeholder="e.g. 123"
                        className="w-full bg-stone-950 border border-white/10 rounded-xl px-4 py-3.5 text-stone-100 font-mono text-sm placeholder-stone-600 focus:outline-none focus:border-white/30 transition-all duration-200"
                    />
                    
                    <div className="flex justify-end pt-2">
                        <Button text="Start ->" onClick={handler} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InputPage