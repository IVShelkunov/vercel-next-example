import { useEffect, useState } from "react"

export const useScrollDirection = () => {
    const [scrollDirection , setScrollDirection] = useState<"up" | "down">("up");
    useEffect(() => {
        let lastScrollY = window.scrollY;
        const updateScrollDiretion = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY? "down" : "up";
            if(direction!==scrollDirection && Math.abs(scrollY - lastScrollY) > 0){
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener('scroll' , updateScrollDiretion);

        return () => {
            window.removeEventListener('scroll' , updateScrollDiretion);
        };
        

    },[scrollDirection]);
    return scrollDirection;
}