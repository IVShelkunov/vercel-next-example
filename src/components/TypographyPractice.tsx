export default function TypographyPracticeItem(){
    return(
        <div className="grid grid-cols-4 px-5 py-4 gap-4 w-full font-cyber-jetbrains">
            <p className="col-span-4 flex justify-center
             text-xs tracking-widest  "
             >[  STATUS: SYSTEM_ONLINE  ]</p>
            <p className="col-span-4 flex justify-center
             font-extrabold  text-3xl 
             tracking-tight "
             >DRIVE DRIFT DOSE</p>
            <button className="col-span-2 col-start-2 
            flex items-center justify-center
             bg-cyber-green text-black
             font-bold text-xs
             py-4" 
            >
                {'>'} ENTER_THE_HUB_  █
            </button>
        </div>
    );
    
}