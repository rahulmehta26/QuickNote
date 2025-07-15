import type React from "react"
import type { WithChildren } from "../../types/ui"

const Main: React.FC<WithChildren> = ({ children }) => {
    return (
        <main>{children}</main>
    )
}

export default Main