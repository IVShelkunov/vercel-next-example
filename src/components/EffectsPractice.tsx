import GridContainer from "./layuot/GridContainer";

export default function EffectsPractice() {
    return(
        <GridContainer className="py-5">
            <button className="col-span-2 col-start-2 
            flex items-center justify-center
             bg-cyber-green text-black
             font-bold text-xs
             py-4 rounded-2xl
             shadow-cyber-hub " 
            >
                <span>&gt; ENTER_THE_HUB_</span> <span className="whitespace-pre animate-cyber-pulse "  >  █</span>
            </button>
        </GridContainer>
    );
}