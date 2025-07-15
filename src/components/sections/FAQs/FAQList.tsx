import React, { useState } from 'react'
import type { FAQQuestion } from '../../../utils/content';
import { motion, stagger } from "motion/react"
import FAQ from './FAQ';

interface FAQListProps {
    category: string;
    question: FAQQuestion[] | undefined;
    activeQuestion: number | null;
    handleQuestionClick: (index: number) => void;
}

const FAQList: React.FC<FAQListProps> = ({ category, question, activeQuestion, handleQuestionClick }) => {

    const [inView, setInView] = useState<boolean>(false);
    return (
        <motion.ul
            className=' m-auto flex max-w-[51.625rem] flex-col gap-y-14 max-lg:gap-y-12 '
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            key={category}
            layout
            variants={{
                hidden: {
                    opacity: 0,

                },
                visible: {
                    transition: {
                        delayChildren: stagger(0.25),
                        ease: "easeIn",
                    }
                }
            }}

            whileInView={{ opacity: 1 }}
            onViewportEnter={() => setInView(true)}
            onViewportLeave={() => setInView(false)}
            viewport={{ once: false, amount: 0.35 }}
        >
            {
                question?.map((question) => (
                    <FAQ
                        key={question.id}
                        question={question}
                        activeQuestion={activeQuestion}
                        handleQuestionClick={handleQuestionClick} />
                ))
            }
        </motion.ul>
    )
}

export default FAQList