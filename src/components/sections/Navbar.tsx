import Logo from '../icons/Logos'
import { navigationLinks } from '../../utils/content'
import { useModalContext } from '../../contexts/ModalContext'
import MobileMenuIcon from './MobileMenu/MobileMenuIcon';

const Navbar = () => {

    const { setActiveModal } = useModalContext();

    return (
        <nav className=' text-primary-50 m-auto flex justify-between items-center max-w-[90rem] px-24 text-lg/8 font-light max-xl:px-16 max-xl:text-base/loose max-lg:px-8 max-md:px-6 ' >

            <a href='#' className=' flex items-center gap-x-3 max-md:gap-x-2 ' >

                <Logo width={4.5} className="h-6 text-primary-500 max-md:h-5 " />

                <p className=' text-xl font-bold tracking-tight max-md:text-lg/8 '
                >
                    QuickNote
                </p>
            </a>

            <ul className=' flex items-center gap-x-8 max-xl:gap-x-6 max-lg:hidden ' >
                {navigationLinks.map(({ id, link, href }) => (
                    <li key={id}>
                        <a className='hover:text-primary-500 transition-properties' href={href}>{link}</a>
                    </li>
                ))}
            </ul>

            <div className=' flex gap-x-3 items-center max-lg:hidden ' >
                <button
                    className=' border-primary-50 transition-properties box-border cursor-pointer rounded-full border-2 px-8 py-3.5 font-normal hover:bg-primary-50 hover:text-primary-1300 text-lg/8 max-xl:px-6 max-xl:py-3 max-xl:text-base/loose '
                >
                    Login
                </button>

                <button
                    className=' bg-primary-500 border-primary-500 transition-properties cursor-pointer text-primary-1300 hover:border-primary-50 hover:bg-primary-50 primary-glow-hover rounded-full px-8 py-3.5 font-normal primary-glow text-lg/8 max-xl:px-6 max-xl:py-3 max-xl:text-base/loose '
                    onClick={() => setActiveModal("sign-up")}
                >
                    Get Started
                </button>
            </div>

            <MobileMenuIcon />
        </nav>
    )
}

export default Navbar