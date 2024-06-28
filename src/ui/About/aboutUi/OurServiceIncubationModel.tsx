import { AboutHeader, TAboutHeader } from "../components/Header"
import { Wrapper } from "../components/Wrapper"
import diamond from '../../../assests/Polygon 3 (1).svg'
import pentangle from '../../../assests/Polygon 3 (2).svg'
import triangle from '../../../assests/Polygon 3.svg'
import { Card } from "../../../components/Card"
import { BottomArrText } from "../components/BottomArrText"



export const SubHeading = ({ headerText, headerParagraph }: TAboutHeader) => {
    return (
        <>
            <h1 className="font-medium text-[18px]  lg:text-[32px] lg:text-start text-center text-textColor1">
                {headerText}
            </h1>
            <p className="font-normal text-[15px] lg:text-[17px] text-center lg:text-start text-textColor2">
                {headerParagraph}
            </p>
        </>
    )
}
export const OurServiceIncubationModel = () => {
    const ourServiceIncubationModelContent = [
        {
            img: triangle,
            content: "Most early-stage companies and pre-product startups cannot afford professional services especially those who don't have family and friend's network that can support"
        },
        {
            img: diamond,
            content: "Most early-stage companies and pre-product startups cannot afford professional services especially those who don't have family and friend's network that can support"
        },
        {
            img: pentangle,
            content: "Most early-stage companies and pre-product startups cannot afford professional services especially those who don't have family and friend's network that can support"
        },

    ]
    const badgesText = ['Service Incubator Equity', 'SEEQ Maths Equation', 'Value of my Equity Over Time']
    return (
        <Wrapper>
            <AboutHeader
                headerText="Our Service Incubation Model"
                headerParagraph="The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 24 months as been first to invest."
            />
            <SubHeading headerText="Hypothesis" headerParagraph="Just a few reasons we know its time for this model within the ecosystem" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {ourServiceIncubationModelContent.map((content) => (
                    <Card styles="items-start gap-[16px] p-[16px] lg:p-[20px] " >
                        <img src={content.img} alt="" />
                        <p className="font-normal text-[15px] lg:text-[17px] text-textColor2">
                            {content.content}
                        </p>
                    </Card>
                ))}
            </div>
            <SubHeading
                headerText="Case Study"
                headerParagraph="See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time"
            />
            <div className="flex flex-col lg:flex-row items-center gap-[12px]">
                {badgesText.map((badges) => (
                    <button className=" px-[32px] w-[286px] border-[0.5px] py-[12px] rounded-[24px] bg-white text-start text-textColor1">
                        {badges}
                    </button>
                ))}
            </div>
            <BottomArrText text="Become A Service Incubator" />
        </Wrapper >
    )
}

