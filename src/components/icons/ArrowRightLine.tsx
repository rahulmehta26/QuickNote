import React from 'react'
import type { IconProps } from '../../types/ui'

const ArrowRightLine: React.FC<IconProps> = ({ className, width }) => {
    return (
        <svg
            width="19"
            height="4"
            viewBox="0 0 19 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            //  
            className={className}
        >
            <path
                d="M1 1H17 .83"
                strokeWidth={width}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke='var(--color-primary-1300)'
            />
        </svg>
    )
}

export default ArrowRightLine