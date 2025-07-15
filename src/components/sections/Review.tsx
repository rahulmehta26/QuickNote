import { reviewLists } from "../../utils/content"

const Review = () => {
    return (
        <section className=" m-auto px-24 max-w-[90rem] flex flex-wrap items-center gap-x-4 gap-y-4 max-xl:px-16 max-xl:gap-x-3 max-lg:px-8 max-md:px-6 " >
            <ul className=" flex " >
                {
                    reviewLists.map(({ alt, id, src }) => (
                        <li key={id} className="-mr-3 last:mr-0" >

                            <img
                                src={src}
                                alt={alt}
                                className="border-primary-100 border-3 h-12 rounded-full object-cover max-xl:h-10 "
                            />

                        </li>
                    ))
                }
            </ul>

            <p className=" text-primary-100 text-xl/loose font-light max-lg:text-base/loose " > Trusted by <span className=" text-primary-500 font-bold tracking-tighter " >12,653+</span>{" "}
                productivity junkies
            </p>
        </section>
    )
}

export default Review