import { ReactNode } from "react"

type TCard = {
    children: ReactNode
    styles: string
}

export const Card = ({ children, styles }: TCard) => {
    return (
        <div className="bg-white p-[24px] rounded-[12px]">
            <div className={`flex flex-col ${styles}`}>
                {children}
            </div>
        </div>
    )
}
