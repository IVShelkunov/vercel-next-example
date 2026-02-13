import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ActionButtonProps {
    variant: 'hero' |'drive' | 'drift' | 'dose',
    children: ReactNode,
    className?: string
    
}
export default function ActionButton({variant , children, className}:Readonly<ActionButtonProps>) {
    return(
        <button className={cn(
            // 1. Базовые классы (всегда есть)
            `col-span-2 col-start-2 
            h-8.75 flex items-center justify-center 
             text-black font-mono font-bold text-xs
              py-4 rounded-[10px]`,
            // 2. // Варианты
            variant === 'hero' && "bg-cyber-green shadow-cyber-hub ",
            variant === 'drive' && "bg-cyber-pink shadow-cyber-drive ",
            variant === 'drive' && "bg-amber-50",
            className
        )}>
            <span>
                &gt; {children}
            </span>
            <span className="whitespace-pre animate-cyber-pulse "  > █</span>
        </button>
    );
}