import React from 'react'
import type { FAQQuestion } from '../../../utils/content'
import { AnimatePresence, motion } from "motion/react"
import CaretUp from '../../icons/CaretUp';

interface FAQProps {
    question: FAQQuestion;
    activeQuestion: number | null;
    handleQuestionClick: (index: number) => void;
}

const FAQ: React.FC<FAQProps> = ({ question, activeQuestion, handleQuestionClick }) => {

    const itemVariants = {
        hidden: { opacity: 0, y: 20, transition: { duration: 0.25, ease: [0.42, 0, 0.58, 1] as [number, number, number, number], } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] as [number, number, number, number], } }
    }

    const answerVariants = {
        hidden: {
            opacity: 0,
            height: 0,
            paddingTop: 0,
            transition: { duration: 0.25, ease: [0.42, 0, 0.58, 1] as [number, number, number, number], }
        },
        visible: {
            opacity: 1,
            height: "auto",
            paddingTop: 16,
            transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] as [number, number, number, number], }
        }
    };

    return (
        <motion.li
            variants={itemVariants}
            className='shrink-0 grow-0 '
        >
            <button
                className=' flex cursor-pointer w-full items-center '
                onClick={() => handleQuestionClick(question.id)}
            >

                <div
                    className=' border-primary-50 border-2 mr-6 rounded-xl p-3.5 max-sm:mr-4 max-sm:p-3 '
                >
                    <question.Icon
                        width={2}
                        className='stroke-primary-50'
                        alt={question.alt}
                    />
                </div>

                <p className=' text-primary-50 mr-auto pr-4 text-left text-xl/loose font-medium tracking-tight max-lg:text-lg/8 max-lg:font-semibold max-sm:text-base/6 max-sm:font-medium '
                >
                    {question.question}
                </p>

                <div className=' flex h-12 w-12 shrink-0 items-center justify-center ' >
                    <CaretUp
                        className="stroke-primary-50"
                        activeQuestion={activeQuestion === question.id}
                        width={2.5}

                    />
                </div>
            </button>

            <AnimatePresence initial={false} mode="wait">

                <motion.div
                    id={`answer-${question.id}`}
                    className="overflow-hidden"
                    initial="hidden"
                    animate={activeQuestion === question.id ? "visible" : "hidden"}
                    exit="hidden"
                    variants={answerVariants}
                    layout
                >
                    <p className="text-primary-100 pr-14 pl-20 text-lg/8 font-light max-lg:text-base/loose max-sm:pr-0  ">
                        {question.answer}
                    </p>
                </motion.div>

            </AnimatePresence>

        </motion.li>
    )
}

export default FAQ