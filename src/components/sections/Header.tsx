import type React from "react"
import type { WithChildren } from "../../types/ui"

const Header: React.FC<WithChildren> = ({ children }) => {
  return (
    <header
      className="bg-gradient-to-bottom py-10 max-xl:py-8 max-lg:pb-24 max-md:pt-6 max-md:pb-24 "
    >
      {children}
    </header>
  )
}

export default Header