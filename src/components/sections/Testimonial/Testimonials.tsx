import { useState } from "react"
import TestimonialList from "./TestimonialList";
import { testimonials as test } from "../../../utils/content";
import CaretUp from "../../icons/CaretUp";

const Testimonials = () => {

    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <section className=" bg-gradient-to-top " >

            <div className=" m-auto flex max-w-[90rem] flex-col items-center px-24 py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6 " >

                <div className=" mb-20 flex max-w-[51.625rem] flex-col items-center gap-y-6 max-lg:mb-18 max-lg:gap-y-0 " >

                    <p
                        className=' bg-primary-500 w-min border-primary-500 transition-properties text-primary-1300 rounded-full px-8 py-3.5 font-normal primary-glow max-lg:mb-8 '
                    >
                        Testimonials
                    </p>

                    <h2
                        className=" text-primary-50 text-center text-6xl/18 font-semibold tracking-tight max-xl:text-5xl/16 max-lg:mb-4 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter "
                    >
                        What our AI-powered <br />
                        notetakers have to say
                    </h2>

                    <p className=" text-primary-100 px-28 text-center text-xl/loose font-light max-lg:text-lg/8 max-md:px-4 " >
                        QuickNote has helped 1000's supercharge their productivity with cutting edge AI note taking tools
                    </p>
                </div>

                <div className=" mb-20 grid grid-cols-3 gap-x-6 max-xl:gap-x-4 max-lg:mb-18 max-lg:grid-cols-2 max-sm:grid-cols-1 " >
                    <TestimonialList testimonials={test.slice(0, expanded ? 5 : 2)} />
                    <TestimonialList testimonials={test.slice(5, expanded ? 10 : 7)} />
                    <TestimonialList testimonials={test.slice(10, expanded ? 15 : 12)} />

                </div>

                <button
                    className=" text-primary-50 border-primary-50 transition-properties hover:bg-primary-50 hover:text-primary-1300 group cursor-pointer gap-x-3 rounded-full border-2 px-8 py-3.5 text-lg/8 flex items-center max-xl:px-6 max-xl:py-3 max-xl:text-base/loose "
                    onClick={() => setExpanded((curr) => !curr)}
                >
                    {!expanded ? "Show more" : "Show less"}

                    <CaretUp
                        width={2.5}
                        className={`stroke-primary-50 group-hover:stroke-primary-1300 rotate-180 transition-transform ease-in-out ${expanded && "rotate-180"} `}
                        activeQuestion={expanded}
                    />
                </button>

            </div>
        </section>
    )
}

export default Testimonials