import ArrowRightLine from '../icons/ArrowRightLine'
import ArrowRight from '../icons/ArrowRight'
import HeroGraphic from '../../assets/graphics/HeroGraphic.webp'
import { useModalContext } from '../../contexts/ModalContext'

const Hero = () => {

    const { setActiveModal } = useModalContext();

    return (
        <div className=' m-auto grid max-w-[90rem] grid-cols-[5fr_4fr] items-center gap-x-18 px-24 py-42 max-xl:grid-cols-2 max-xl:gap-x-12 max-xl:px-16 max-xl:py-38 max-lg:px-8 max-lg:py-32 max-md:grid-cols-1 max-md:grid-rows-[repeat(2,auto)] max-md:gap-y-12 max-md:px-6 max-md:py-24 ' >

            <div>
                <h1
                    className=' text-primary-50 mb-6 text-6xl/18 font-semibold tracking-tighter  max-xl:mb-4 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter '
                >
                    AI-Powered Notes. Organize and Summarize in Seconds
                </h1>

                <p
                    className='text-primary-100 mb-10 text-xl/loose font-light max-xl:mb-8 max-xl:text-lg/8 max-lg:text-base/loose  '
                >
                    Let AI organize & summarize your notes, <br />
                    saving you time and boosting productivity
                </p>

                <button
                    className=' bg-primary-500 border-primary-500 transition-properties cursor-pointer text-primary-1300 hover:border-primary-50 hover:bg-primary-50 primary-glow-hover rounded-full px-8 py-3.5 font-normal primary-glow group flex items-center gap-x-3 max-xl:gap-x-2 max-xl:px-6 max-xl:py-3 '
                    onClick={() => setActiveModal("sign-up")}
                >

                    <p className='text-lg/8 max-xl:text-base/loose ' > Get Started </p>

                    <div className=' w-5 max-xl:w-4 max-sm:hidden ' >

                        <ArrowRightLine width={2.5} className='rounded-xl transition-properties inline ease-in-out -mr-[.850rem] opacity-0 w-0 group-hover:w-3 group-hover:opacity-100 ' />

                        <ArrowRight width={2} className='inline w-5 max-xl:w-4 ' />

                    </div>

                </button>

            </div>

            <div className=' relative ' >

                <div className=' bg-primary-1300 absolute top-0 right-0 bottom-0 left-0 rounded-full blur-3xl ' />

                <img
                    src={HeroGraphic}
                    alt='Hero graphic note summarizer functionality'
                    className='relative max-h-[30rem] justify-self-end max-md:max-h-auto max-md:max-w-[90%] max-md:justify-self-center max-sm:max-w-full '
                />
            </div>
        </div>
    )
}

export default Hero 