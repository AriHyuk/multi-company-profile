import { ImgHTMLAttributes } from "react";

export default function ApplicationLogo({
    className,
    ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            {...props}
            src="/assets/logo.png"
            alt="DIGIKOVA Logo"
            className={`h-9 w-auto object-contain ${className}`}
        />
    );
}
