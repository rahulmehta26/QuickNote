import React from 'react'
import { motion } from 'motion/react'

interface CaretUpProps {
    alt?: string,
    className: string,
    width: number,
    activeQuestion: boolean | null
}

const CaretUp: React.FC<CaretUpProps> = ({ className, width = 1.5, activeQuestion }) => {
    return (
        <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            //  
            animate={{ rotate: activeQuestion ? -180 : 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
        >
            <path
                d="M19.92 15.0501L13.4 8.53014C12.63 7.76014 11.37 7.76014 10.6 8.53014L4.08002 15.0501"
                strokeWidth={width}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </motion.svg>
    )
}

export default CaretUp