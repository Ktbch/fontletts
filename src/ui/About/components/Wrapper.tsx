import { ReactNode } from "react"

type TWrapper = {
    children: ReactNode
}

export const Wrapper = ({ children }: TWrapper) => {
    return (
        <div className="flex flex-col  gap-[32px] lg:gap-[30px] py-10">
            {children}
        </div>
    )
}

