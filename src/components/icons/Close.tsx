import type React from "react"
import type { IconProps } from "../../types/ui"

const Close: React.FC<IconProps> = ({ alt, className, width }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        // alt={alt}
        >
            <path
                d="M6 18L18 6"
                strokeWidth={width}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18 18L6 6"
                strokeWidth={width}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Close