import SmartOrganization from '../../assets/graphics/SmartOrganization.webp'
import ContextualReminder from '../../assets/graphics/ContextualReminders.webp'

const Features = () => {
    return (
        <section className=' bg-primary-1500 overflow-hidden bg-[url("../src/assets/Noise.webp")] bg-repeat ' >

            <div className=' text-primary-50 relative m-auto max-w-[90rem] px-24 py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6 ' >

                <div className=' bg-primary-1300 -translate-[50%] absolute top-[50%] left-[100%] h-[62.5rem] w-[62.5rem] rounded-full blur-[40rem] opacity-100 max-xl:h-[35rem] max-xl:w-[35rem] max-xl:blur-[10rem] max-lg:left-[90%] max-lg:h-[20rem] max-lg:w-[20rem ] max-md:-z-1 ' />

                <h2
                    className=' text-center mb-28 text-6xl/18 font-semibold tracking-tighter max-xl:mb-18 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter '
                >
                    All The Tools You Need to {""} <br />
                    <span className=' text-primary-500 primary-glow ' >Supercharge</span> {""} Your Note Taking
                </h2>

                <div className=' grid grid-cols-2 mb-20 items-center gap-x-16 max-xl:mb-12 max-md:mb-16 max-md:grid-cols-1 max-md:gap-y-10 ' >

                    <figure>
                        <img
                            src={SmartOrganization}
                            alt='Smart organization Iphone graphic'
                            className='max-h-[45rem] max-md:max-w-[90%] max-md:justify-self-center '
                        />
                    </figure>

                    <div className=' z-1 max-w-lg justify-self-end max-md:row-start-1 max-md:max-w-max ' >

                        <p
                            className=' mb-8 text-5xl/16 font-semibold tracking-tighter max-xl:mb-6 max-xl:text-4xl/10  max-lg:mb-4 max-lg:text-3xl/12 max-sm:text-2xl/8 max-sm:tracking-tight '
                        >
                            Smart Organization
                        </p>

                        <p
                            className=' text-primary-100 z-1 text-xl/loose font-light max-xl:lg/8 max-lg:text-base/loose '
                        >
                            Automatically categorize and tag your notes using AI-driven analysis. QuickNote intelligently identifies key topics and organizes your content, making it easy to find and retrieve your notes when you need them most.
                        </p>

                    </div>
                </div>

                <div className=' grid grid-cols-2 items-center gap-x-16 max-md:grid-cols-1 ' >

                    <div className='max-w-lg justify-self-start max-md:max-w-max ' >

                        <p
                            className=' mb-8 text-5xl/16 font-semibold tracking-tighter max-xl:mb-6 max-xl:text-4xl/10  max-lg:mb-4 max-lg:text-3xl/12  max-sm:text-2xl/8 max-sm:tracking-tight'
                        >
                            Contextual Reminders
                        </p>

                        <p className=' text-primary-100 z-1 text-xl/loose font-light max-xl:lg/8 max-lg:text-base/loose ' >
                            Stay on top of important tasks with AI-powered reminders that adapt to the context of your notes. QuickNote recognizes deadlines, follow-ups, and key actions from your notes and sends timely alerts to ensure nothing slips through the cracks.

                        </p>
                    </div>

                    <figure className=' z-1 ' >
                        <img
                            src={ContextualReminder}
                            alt='Smart organization Iphone graphic'
                            className='max-h-[45rem] max-md:max-w-[90%] max-md:justify-self-center'
                        />
                    </figure>

                </div>

            </div>
        </section>
    )
}

export default Features