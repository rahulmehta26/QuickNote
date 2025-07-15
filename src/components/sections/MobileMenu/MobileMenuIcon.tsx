import { motion } from "motion/react"
import Menu from "../../icons/Menu"
import { useMobileMenuContext } from "../../../contexts/MobileMenuContext";

const MobileMenuIcon = () => {

    const { mobileMenuOpened, setMobileMenuOpened } = useMobileMenuContext();

    return (
        <motion.button
            animate={{
                rotate: mobileMenuOpened ? 90 : 0
            }}
            transition={{
                duration: 0.2,
                ease: "easeInOut"
            }}
            className="hidden cursor-pointer items-center justify-center max-lg:flex  "
            onClick={() => setMobileMenuOpened(true)}
        >

            <Menu
                width={2}
                className=" stroke-primary-50 h-7 w-7 "
            />
        </motion.button>
    )
}

export default MobileMenuIcon