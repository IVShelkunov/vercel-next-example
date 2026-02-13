import { ReactNode } from "react";

interface GridContainerProps {
    children: ReactNode,
    className?: string,
    as?:React.ElementType
}
export default function GridContainer({
    children,
    className,
    as: Component = 'div'
}:GridContainerProps) {
    return(
        <Component className={`w-full grid grid-cols-4 px-5 gap-4 max-w-md mx-auto ${className}`}>
            {children}
        </Component>
    );
}