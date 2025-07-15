import { createContext, useContext, useState, type ReactNode } from "react"

interface ModalContextType {
    activeModal: string | null;
    setActiveModal: React.Dispatch<React.SetStateAction<string | null>>;
}

interface ModalProviderProps {
    children: ReactNode;
}


export const ModalContext = createContext<ModalContextType | undefined>(undefined);

function ModalContextProvider({ children }: ModalProviderProps) {

    const [activeModal, setActiveModal] = useState<string | null>("")

    return <ModalContext.Provider value={{ activeModal, setActiveModal }} >{children}</ModalContext.Provider>
}

function useModalContext() {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModalContext must be used within a ModalContextProvider");
    }
    return context;
}

export {
    useModalContext, ModalContextProvider
}