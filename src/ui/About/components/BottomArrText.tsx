import { ArrowRightIcon } from "lucide-react"

type TBottomArrText = {
    text: string
    isArrowVisble?: boolean
}

export const BottomArrText = ({ text, isArrowVisble = true }: TBottomArrText) => {
    return (
        <div className="flex items-center gap-[2px] justify-center">
            <p className="text-[16px] font-semibold underline">{text}</p>
            <ArrowRightIcon size={20} className={`${isArrowVisble ? 'block' : 'hidden'}`} />
        </div>
    )
}

