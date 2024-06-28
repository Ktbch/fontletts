import { BottomArrText } from "../components/BottomArrText"
import { AboutHeader } from "../components/Header"
import { Wrapper } from "../components/Wrapper"
import { portfolioImages } from "../img"

export const OurStudioPortifilo = () => {
    return (
        <Wrapper>
            <AboutHeader
                headerText="Our Studio Portfolio"
                headerParagraph="Our 2024 Service Incubator Portfolio Companies"
            />
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-col-8 gap-[12px]">
                {portfolioImages.map((images) => (
                    <div className="bg-white text-center border-[0.96px]   rounded-[12px]">
                        <img src={images} alt="" className="text-center px-3 py-3 md:px-7 md:py-5 lg:px-10 " />
                    </div>
                ))}
            </div>
            <BottomArrText text="View All Companies " />
        </Wrapper>
    )
}

