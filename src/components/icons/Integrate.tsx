import React from 'react'
import type { IconProps } from '../../types/ui'

const Integrate: React.FC<IconProps> = ({ className, width = 1.5 }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        //  
        >
            <path
                d="M7 8H4C2.9 8 2 7.1 2 6V4C2 2.9 2.9 2 4 2H7C8.1 2 9 2.9 9 4V6C9 7.1 8.1 8 7 8Z"
                strokeWidth={width}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.8 7H17.2C16.54 7 16 6.45999 16 5.79999V4.20001C16 3.54001 16.54 3 17.2 3H20.8C21.46 3 22 3.54001 22 4.20001V5.79999C22 6.45999 21.46 7 20.8 7Z"
                strokeWidth={width}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.8 14.5H17.2C16.54 14.5 16 13.96 16 13.3V11.7C16 11.04 16.54 10.5 17.2 10.5H20.8C21.46 10.5 22 11.04 22 11.7V13.3C22 13.96 21.46 14.5 20.8 14.5Z"
                strokeWidth={width}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9 5H16"
                strokeWidth={width}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.5 5V18C12.5 19.1 13.4 20 14.5 20H16"
                strokeWidth={width}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.5 12.5H16"
                strokeWidth={width}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.8 22H17.2C16.54 22 16 21.46 16 20.8V19.2C16 18.54 16.54 18 17.2 18H20.8C21.46 18 22 18.54 22 19.2V20.8C22 21.46 21.46 22 20.8 22Z"
                strokeWidth={width}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Integrate