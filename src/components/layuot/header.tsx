"use client";
import Image from "next/image";
import GridContainer from "./GridContainer";
export default function Header() {
    
    return(
        <header className=
            "sticky top-0  w-full z-50 bg-black/50 backdrop-blur-md  transition-all duration-400 " 
            >
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
