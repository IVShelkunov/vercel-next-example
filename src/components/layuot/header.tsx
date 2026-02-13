"use client";
import Image from "next/image";
import GridContainer from "./GridContainer";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";
export default function Header() {
    const scrollDirection = useScrollDirection();
    const [isTop , setIsTop] = useState(true);
    useEffect(() => {
      const handleScroll = () => {
        setIsTop(window.scrollY < 50);
      }
      window.addEventListener('scroll' , handleScroll);
      handleScroll();
      return () => {
        window.removeEventListener('scroll' , handleScroll);
      } 
    },[]);
    
    return(
        <header className={cn(
            "fixed w-full z-50 bg-black/75  transition-all duration-400 " , 
            !isTop && "backdrop-blur-md",
            scrollDirection === "down" && !isTop ? "-translate-y-full " : "translate-y-0"
            
        )}>
              <GridContainer className=" py-5 items-center">
                <div className="col-span-2 flex items-center justify-center">
                  <Image 
                  src={'/header/logo.png'} 
                  alt="Drive Drift Dose Icons"
                  width={168}
                  height={44}
                  priority
                  className="h-[42.98px] w-auto"
                  />
                </div>
                <div className="col-span-1 col-start-4 justify-self-end flex items-center">
                  <button>
                    <Image
                      src={'/header/menu.png'} 
                      alt="Burger menu"
                      width={41}
                      height={43}
                      priority
                      className="h-[43] w-auto"
                    />
                  </button>
                </div>
              </GridContainer>
          </header>
    );
}
