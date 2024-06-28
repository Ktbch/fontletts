import { ReactNode } from "react"

type TButton = {
    children: ReactNode
    color: string
}
export const Button = ({ children, color }: TButton) => {
    return (
        <button className={`text-white w-[147px] h-[49px] rounded-[24px] font-semibold text-[16px] ${color}`}>{children}</button>
    )
}


