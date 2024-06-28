export type TAboutHeader = {
    headerText?: string
    headerParagraph?: string
    style?: string
}

export const AboutHeader = ({ headerText, headerParagraph, style }: TAboutHeader) => {
    return (
        <div className={style}>
            <h1 className="font-medium text-[20px] lg:text-[56px] text-textColor1 text-center">{headerText}</h1>
            <p className="font-normal text-[15px] lg:text-[17px] text-center text-textColor1">
                {headerParagraph}
            </p>
        </div>
    )
}


