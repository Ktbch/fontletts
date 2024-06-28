import { Card } from "../../../components/Card"
import { AboutHeader } from "../components/Header"
import { Wrapper } from "../components/Wrapper"
import circle1 from '../../../assests/Ellipse 173 (1).png'
import circle2 from '../../../assests/Ellipse 173 (2).png'
import circle3 from '../../../assests/Ellipse 173.png'
import { BottomArrText } from "../components/BottomArrText"

const CoFounderWithUs = () => {
    const coFounderWithUsContent = [
        {
            circle: circle3,
            number: 1,
            contentHeading: "We Ideate",
            content: "We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market."
        },

        {
            circle: circle1,
            number: 2,
            contentHeading: "You Validate",
            content: "You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions "

        },
        {
            circle: circle2,
            number: 3,
            contentHeading: "You Co-own",
            content: "After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture."

        },
    ]
    return (
        <Wrapper>
            <AboutHeader headerText="Co-found With Us" headerParagraph="We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed " />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {coFounderWithUsContent.map((content, index) => (
                    <Card styles="items-start gap-[16px] md:gap-[20px]" key={index}>
                        <div className="relative">
                            <img src={content.circle} alt="" />
                            <span className="absolute top-[34%] left-[40%] lg:top-[25%] lg:left-[39%] text-[13.33px] lg:text-[20px] text-white">{content.number}</span>
                        </div>
                        <h1 className="font-medium text-[18px]  lg:text-[20px]  text-textColor1">
                            {content.contentHeading}
                        </h1>
                        <p className="font-normal text-[14px] lg:text-[16px] text-textColor2">
                            {content.content}
                        </p>
                    </Card>
                ))}
            </div>
            <BottomArrText text="Build your dream" />
        </Wrapper>
    )
}

export default CoFounderWithUs
