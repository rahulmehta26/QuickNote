import { createContext, useContext, useState, type ReactNode } from "react";

interface MobileMenuContextType {
    mobileMenuOpened: boolean;
    setMobileMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MobileMenuProviderProps {
    children: ReactNode;
}

const MobileMenuContext = createContext<MobileMenuContextType | null>(null);

function MobileMenuContextProvider({ children }: MobileMenuProviderProps) {

    const [mobileMenuOpened, setMobileMenuOpened] = useState<boolean>(false)

    return <MobileMenuContext.Provider value={{ mobileMenuOpened, setMobileMenuOpened }} >{children}</MobileMenuContext.Provider>
}

function useMobileMenuContext() {
    const context = useContext(MobileMenuContext)

    if (!context) {
        throw new Error("useMobileMenuContext must be used within a MobileMenuContextProvider");
    }
    return context;
}

export { useMobileMenuContext, MobileMenuContextProvider }