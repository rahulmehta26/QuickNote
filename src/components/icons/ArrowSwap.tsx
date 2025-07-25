import React from 'react'
import type { IconProps } from '../../types/ui'

const ArrowSwap: React.FC<IconProps> = ({ className, width = 1.5 }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            //  
            className={className}
        >
            <path
                d="M20.5 14.9902L15.49 20.0102"
                strokeWidth={width}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.5 14.9902H20.5"
                strokeWidth={width}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.5 9.01023L8.51 3.99023"
                strokeWidth={width}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.5 9.00977H3.5"
                strokeWidth={width}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ArrowSwap