import { ReactNode } from "react";
import GridContainer from "./layuot/GridContainer";
import { cn } from "@/lib/utils";

interface SectorItemProps {
    id: string, 
    children: ReactNode,
    className: string,
    select: string,
}
export default function SectorItem({id , children,className,select}:SectorItemProps) {
    return(
        <section className="absolute inset-0  ">
            <div className="relative h-screen w-full">
                <div className="absolute top-55">
                    <GridContainer>
                        <h1 className="
                            col-span-4 flex justify-center 
                            text-[40px] font-extrabold
                            font-mono tracking-tight
                            text-cyber-glow
                        ">
                            [{id}] {children}
                        </h1>
                    </GridContainer>
                </div>
                <div className="absolute top-79.5 ">
                    <GridContainer>
                        
                        <p className={cn(
                            `col-span-4 flex justify-center h-12
                             text-[16px] font-extrabold
                            font-mono text-cyber-cyan `
                        )}>
                            {select}
                        </p>
                    </GridContainer>
                </div>
            </div>
        </section>
    );
}