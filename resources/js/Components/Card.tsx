import { HTMLAttributes } from "react";

export default function Card({
    className = "",
    children,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={"rounded-xl bg-white shadow-sm " + className}
        >
            {children}
        </div>
    );
}
