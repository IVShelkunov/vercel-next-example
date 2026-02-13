import Image from "next/image";
import GridContainer from "./layuot/GridContainer";
import ActionButton from "./ui/actionButton";
export default function HeroScreen() {
    return(
        <div className="relative w-full h-screen ">
            {/*фоновое изображение */}
            <Image 
                src={'/videosector/hero.jpg'}
                alt="hero"
                fill
                priority
            className="absolute inset-0  "/>
            {/*слой затемнения */}
            <div className="absolute inset-0 bg-black/50"></div>
            {/*текст статус */}
            <div className="z-10 absolute top-46.75 left-0 w-full">
                <GridContainer className=" h-12 ">
                    <p className="col-span-4 flex justify-center
                    text-xs font-mono text-cyber-cyan font-extrabold "
                    >[ STATUS: SYSTEM_ONLINE ]</p>
                </GridContainer>
            </div>
            {/*Заголовок DDD */}
            <div className="absolute top-58.25 left-0 w-full h-13.75">
                <GridContainer>
                    <p className="col-span-4 flex justify-center
                    text-[32px]
                    font-extrabold  
                    tracking-tight
                    text-cyber-glow 
                    font-tech-features font-mono "
                    >DRIVE DRIFT DOSE</p>
                </GridContainer>
            </div>
            {/*Кнопка призыва к действию */}
            <div className="absolute top-90.75 left-0 w-full ">
                <GridContainer className="py-5">
                    <ActionButton variant="hero">
                        ENTER_THE_HUB_
                    </ActionButton>
                </GridContainer>
            </div>
        </div>
        
     
    );
}