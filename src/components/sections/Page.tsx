import type React from "react"
import type { WithChildren } from "../../types/ui"

const Page: React.FC<WithChildren> = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

export default Page